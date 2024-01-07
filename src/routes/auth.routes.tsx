import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="signin"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
