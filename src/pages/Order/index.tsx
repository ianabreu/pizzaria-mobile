import React, { useState, useEffect, memo } from "react";
import Toast from "react-native-toast-message";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container } from "../../components/layout/container";
import { Title } from "../../components/ui/title";
import { colors, metrics } from "../../theme";
import { QuantityInput } from "../../components/layout/quantity";
import { Button } from "../../components/ui/button";
import { api } from "../../services/api";
import { StackParamsList } from "../../routes/app.routes";
import { CategoryProps } from "../../types/category";
import { ProductProps } from "../../types/product";
import { Select } from "../../components/ui/select";
import { ModalPicker } from "../../components/ui/modalPicker";

type RouteDetailParams = {
  order: {
    table: number;
    order_id: string;
  };
};
type OrderRouteProps = RouteProp<RouteDetailParams, "order">;

type ItemProps = {
  id: string;
  product_id: string;
  name: string;
  amount: number;
};

function Order() {
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      marginTop: 24,
      gap: 16,
    },
  });
  const {
    params: { order_id, table },
  } = useRoute<OrderRouteProps>();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState<CategoryProps[]>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productSelected, setProductSelected] = useState<ProductProps>();
  const [modalProductVisible, setModalProductVisible] = useState(false);

  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get("/category");
        setCategory(response.data);
        setCategorySelected(response.data[0]);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Erro ao carregar as categorias.",
        });
        console.log(error);
      }
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        if (categorySelected?.id !== undefined) {
          const response = await api.get("/category/product/", {
            params: { category_id: categorySelected?.id },
          });
          setProducts(response.data);
          setProductSelected(response.data[0]);
        }
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Erro ao carregar os produtos.",
        });
        console.log(error);
      }
    }
    loadProducts();
  }, [categorySelected]);

  async function handleCloseOrder() {
    try {
      await api.delete("/order", {
        params: {
          order_id,
        },
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }
  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item);
  }
  function handleChangeProduct(item: ProductProps) {
    setProductSelected(item);
  }

  return (
    <Container justify="flex-start" align="flex-start">
      <View style={{ flex: 1, width: "100%" }}>
        <View style={styles.row}>
          <Title>Mesa {table}</Title>
          <TouchableOpacity style={{ padding: 4 }} onPress={handleCloseOrder}>
            <Icon
              name="trash-outline"
              style={{ backgroundColor: "transparent" }}
              size={28}
              color={colors.error}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            marginVertical: metrics.margin_lg,
            gap: 16,
          }}>
          <Select
            disabled={category.length === 0}
            onPress={() => setModalCategoryVisible(true)}
            optionSelected={categorySelected?.name}
          />
          <Select
            disabled={products.length === 0}
            onPress={() => setModalProductVisible(true)}
            optionSelected={productSelected?.name}
          />

          <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              gap: 8,
            }}>
            <Button style={{ flex: 0.5 }} variant="terciary">
              +
            </Button>
            <Button
              disabled={items.length === 0}
              style={{ flex: 2, opacity: items.length === 0 ? 0.3 : 1 }}
              variant="secondary">
              Avançar
            </Button>
          </View>
        </View>
      </View>
      <Modal transparent visible={modalCategoryVisible} animationType="fade">
        <ModalPicker
          handleCloseModal={() => setModalCategoryVisible(false)}
          options={category}
          selectItem={handleChangeCategory}
        />
      </Modal>
      <Modal transparent visible={modalProductVisible} animationType="fade">
        <ModalPicker
          handleCloseModal={() => setModalProductVisible(false)}
          options={products}
          selectItem={handleChangeProduct}
        />
      </Modal>
    </Container>
  );
}

export default memo(Order);
