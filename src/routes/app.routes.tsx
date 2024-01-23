import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import FinishOrder from "../pages/FinishOrder";

const { Navigator, Screen } = createNativeStackNavigator<StackParamsList>();

export type StackParamsList = {
  dashboard: undefined;
  order: {
    table: number;
    order_id: string;
  };
  finishOrder: undefined;
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
      <Screen name="finishOrder" component={FinishOrder} />
    </Navigator>
  );
}
