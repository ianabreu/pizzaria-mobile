import { Alert, View } from "react-native";
import { Container } from "../../components/layout/container";
import { Button } from "../../components/ui/button";
import { Typography } from "../../components/ui/typography";
import { api } from "../../services/api";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import Toast from "react-native-toast-message";

type RouteDetailParams = {
  finishOrder: {
    order_id: string;
    table: number;
  };
};
type FinishOrderProps = RouteProp<RouteDetailParams, "finishOrder">;
export default function FinishOrder() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const {
    params: { order_id, table },
  } = useRoute<FinishOrderProps>();

  async function finishOrder() {
    try {
      await api.put("/order/send", { order_id });
      Toast.show({
        type: "success",
        text1: "Finalizado com sucesso!",
      });
      navigation.popToTop();
    } catch (error) {
      console.log(error);

      Toast.show({
        type: "error",
        text1: "Erro ao finalizar",
        text2: "Tente novamente mais tarde",
      });
    }
  }
  return (
    <Container justify="center" style={{ gap: 24 }}>
      <View style={{ gap: 18, alignItems: "center" }}>
        <Typography variant="subtitle">
          Você deseja finalizar esse pedido?
        </Typography>
        <Typography variant="title">Mesa: {table}</Typography>
      </View>

      <Button icon="basket-outline" variant="success" onPress={finishOrder}>
        Finalizar pedido
      </Button>
    </Container>
  );
}
