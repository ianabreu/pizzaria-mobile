import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../theme";

export function Routes() {
  const isAuthenticated = true;
  const loading = false;
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ActivityIndicator size={60} color={colors.primary} />
      </View>
    );
  }
  return isAuthenticated ? <AuthRoutes /> : <AppRoutes />;
}
