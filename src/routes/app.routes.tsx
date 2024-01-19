import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";

const { Navigator, Screen } = createNativeStackNavigator<StackParamsList>();

export type StackParamsList = {
  dashboard: undefined;
  order: {
    table: number;
    order_id: string;
  };
};

export default function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Screen name="order" component={Order} options={{ headerShown: false }} />
    </Navigator>
  );
}
