import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

import { api } from "../../services/api";
import { Button } from "../../components/ui/button";
import { Container } from "../../components/layout/container";
import { Input } from "../../components/ui/input";
import { Typography } from "../../components/ui/typography";
import { StackParamsList } from "../../routes/app.routes";
import theme from "../../theme";
import { AxiosError } from "axios";

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const [table, setTable] = useState("");
  const [loading, setLoading] = useState(false);
  function handleSetTable(tableNumber: string) {
    let numberOnly = tableNumber.replace(/\D/g, "");
    if (numberOnly === "0") {
      numberOnly = "";
    }
    if (numberOnly.startsWith("0")) {
      let zeroOnLeft = Number(numberOnly);
      numberOnly = String(zeroOnLeft);
    }
    setTable(numberOnly);
  }

  async function openOrder() {
    if (table.trim() === "") {
      Toast.show({
        type: "error",
        text1: "Informe uma mesa.",
      });
      return;
    }
    try {
      setLoading(true);
      const response = await api.post(
        "/order",
        { table: Number(table) },
        { timeout: 10000 },
      );
      const { table: tableNunber, id } = response.data;
      navigation.navigate("order", {
        table: tableNunber,
        order_id: id,
      });
    } catch (error) {
      if (error instanceof AxiosError && error.message === "Network Error") {
        Toast.show({
          type: "error",
          text1: "Internet não disponível",
        });
        return;
      }
      Toast.show({
        type: "error",
        text1: "Erro ao abrir mesa",
      });
    } finally {
      setLoading(false);
      setTable("");
      Keyboard.dismiss();
    }
  }

  return (
    <Container>
      <Typography variant="title" style={{ marginBottom: theme.spacing.xl }}>
        Novo Pedido
      </Typography>
      <Input
        placeholder={"Número da mesa"}
        keyboardType="numeric"
        value={table}
        onChangeText={handleSetTable}
        selectTextOnFocus
        size="large"
        enterKeyHint="next"
      />
      <Button
        size="large"
        onPress={openOrder}
        variant="success"
        isLoading={loading}>
        Abrir mesa
      </Button>
    </Container>
  );
}
