import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { ActivityIndicator, View } from "react-native";
import theme from "../theme";
import { useAuth } from "../contexts/AuthContext";

export function Routes() {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.color.background,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ActivityIndicator size={60} color={theme.color.primary} />
      </View>
    );
  }
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
