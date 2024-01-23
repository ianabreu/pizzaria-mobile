import React from "react";
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from "react-native-toast-message";
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";
import theme from "./theme";
import { AuthProvider } from "./contexts/AuthContext";

const defaultViewStyle: StyleProp<ViewStyle> = {
  borderRadius: theme.rounded.sm,
  padding: theme.spacing.sm,
  height: "auto",
  width: theme.spacing.w_screen - theme.spacing.lg * 2,
};
const defaultText1Style: StyleProp<TextStyle> = {
  color: theme.color.text,
  fontSize: theme.font.size.lg,
  fontFamily: theme.font.family.semibold,
  textAlign: "center",
};
const defaultText2Style: StyleProp<TextStyle> = {
  color: theme.color.text,
  fontSize: theme.font.size.md,
  fontFamily: theme.font.family.regular,
  textAlign: "center",
};
const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: theme.color.success,
        borderColor: theme.color.success,
        ...defaultViewStyle,
      }}
      text1Style={defaultText1Style}
      text2Style={defaultText2Style}
    />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast
      {...props}
      style={{
        backgroundColor: theme.color.info,
        borderColor: theme.color.info,
        ...defaultViewStyle,
      }}
      text1Style={defaultText1Style}
      text2Style={defaultText2Style}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: theme.color.danger,
        borderColor: theme.color.danger,
        ...defaultViewStyle,
      }}
      text1Style={defaultText1Style}
      text2Style={defaultText2Style}
    />
  ),
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: theme.color.background }}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={theme.color.background}
          />
          <Routes />
          <Toast position="top" config={toastConfig} />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
}
