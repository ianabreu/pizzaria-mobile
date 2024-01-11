import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: ReactNode;
};
type AuthContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
};
type UserProps = {
  id: string;
  name: string;
  token: string;
  email: string;
};
type SignInProps = {
  email: string;
  password: string;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user?.name;
  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem("@pizzaria");
      let hasUser: UserProps = JSON.parse(userInfo || "{}");

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${hasUser.token}`;
        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        });
      } else {
        await AsyncStorage.removeItem("@pizzaria");
        setUser(null);
      }
      setLoading(false);
    }
    getUser();
  }, []);

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/session", { email, password });

      const { id, name, token } = response.data as UserProps;
      const data = { ...response.data };

      await AsyncStorage.setItem("@pizzaria", JSON.stringify(data));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({ id, name, token, email });
    } catch (error) {
      console.log(error);
      setUser(null);
    } finally {
      setLoadingAuth(false);
    }
  }
  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        loadingAuth,
        loading,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Fora do contexto");
  }
  return context;
}
