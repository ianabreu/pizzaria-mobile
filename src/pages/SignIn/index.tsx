import React, { useState } from "react";
import { Alert, Keyboard, StyleSheet, Text, View } from "react-native";
import { colors, metrics } from "../../theme";
import { Logo } from "../../components/ui/logo";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../contexts/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth, isAuthenticated } = useAuth();

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      //enviar notificacao de erro
      return;
    }
    await signIn({ email, password });
    setEmail("");
    setPassword("");
    Keyboard.dismiss();
  }
  console.log(isAuthenticated);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <Input
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin} isLoading={loadingAuth}>
          Acessar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding_lg,
    width: metrics.screenWidth,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});
