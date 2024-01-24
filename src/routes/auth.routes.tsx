import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import theme from "../theme";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ navigationBarColor: theme.color.background }}>
      <Screen
        name="signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
