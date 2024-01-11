import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routes";
import { colors } from "./theme";
import { AuthProvider } from "./contexts/AuthContext";

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
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
}
