import React from "react";
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from "react-native-toast-message";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";
import { colors, fonts, metrics } from "./theme";
import { AuthProvider } from "./contexts/AuthContext";

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
        borderRadius: 4,
        padding: 4,
        height: "auto",
        width: metrics.screenWidth - 32,
      }}
      text1Style={{
        fontSize: fonts.size.xl2,
        color: colors.foreground,
        fontWeight: "700",
        textAlign: "center",
      }}
      text2Style={{
        fontSize: fonts.size.xl2,
        color: colors.foreground,
        fontWeight: "700",
        textAlign: "center",
      }}
    />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast
      {...props}
      style={{
        backgroundColor: colors.terciary,
        borderColor: colors.terciary,
        borderRadius: 4,
        padding: 4,
        height: "auto",
        width: metrics.screenWidth - 32,
      }}
      text1Style={{
        fontSize: fonts.size.xl2,
        color: colors.foreground,
        fontWeight: "700",
        textAlign: "center",
      }}
      text2Style={{
        fontSize: fonts.size.xl2,
        color: colors.foreground,
        fontWeight: "700",
        textAlign: "center",
      }}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: colors.error,
        borderColor: colors.error,
        borderRadius: 4,
        padding: 4,
        height: "auto",
        width: metrics.screenWidth - 32,
      }}
      text1Style={{
        fontSize: fonts.size.xl2,
        color: colors.foreground,
        fontWeight: "700",
        textAlign: "center",
      }}
      text2Style={{
        fontSize: fonts.size.xl2,
        color: colors.foreground,
        fontWeight: "700",
        textAlign: "center",
      }}
    />
  ),
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={colors.background}
          />
          <Routes />
          <Toast position="top" config={toastConfig} />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
}
