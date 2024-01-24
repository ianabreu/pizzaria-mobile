import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import FinishOrder from "../pages/FinishOrder";
import theme from "../theme";

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
    <Navigator
      screenOptions={{
        navigationBarColor: theme.color.background,
      }}>
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Screen
        name="order"
        component={Order}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Screen
        name="finishOrder"
        component={FinishOrder}
        options={{
          title: "Finalizando",
          headerStyle: {
            backgroundColor: theme.color.background,
          },
          headerTintColor: theme.color.text,
          animation: "slide_from_right",
        }}
      />
    </Navigator>
  );
}
