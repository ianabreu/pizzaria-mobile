import { Container } from "../../components/layout/container";
import { Button } from "../../components/ui/button";
import { Typography } from "../../components/ui/typography";

export default function FinishOrder() {
  return (
    <Container justify="flex-start">
      <Typography>Você deseja finalizar esse pedido?</Typography>
      <Typography>Mesa 30</Typography>

      <Button icon="basket-outline" variant="secondary">
        Finalizar pedido
      </Button>
    </Container>
  );
}
