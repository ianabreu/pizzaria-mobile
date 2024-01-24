import React, { useState, useEffect, memo } from "react";
import Toast from "react-native-toast-message";
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useBackHandler } from "@react-native-community/hooks";

import { Container } from "../../components/layout/container";
import { Typography } from "../../components/ui/typography";
import theme from "../../theme";
import { QuantityInput } from "../../components/layout/quantity";
import { Button } from "../../components/ui/button";
import { api } from "../../services/api";
import { StackParamsList } from "../../routes/app.routes";
import { CategoryProps } from "../../types/category";
import { ProductProps } from "../../types/product";
import { Select } from "../../components/ui/select";
import { ModalPicker } from "../../components/ui/modalPicker";
import { ListItem } from "../../components/layout/listItem";

type RouteDetailParams = {
  order: {
    table: number;
    order_id: string;
  };
};
type OrderRouteProps = RouteProp<RouteDetailParams, "order">;

export type ItemProps = {
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
      marginTop: theme.spacing.xl,
      gap: theme.spacing.xl,
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

  useBackHandler(() => {
    if (items.length > 0) {
      Toast.show({
        type: "error",
        text1: "Erro ao sair",
        text2: "Exclua os itens da lista.",
        position: "bottom",
        bottomOffset: 100,
      });
      return true;
    }
    try {
      api.delete("/order", {
        params: {
          order_id,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return false;
  });
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
  function handleFinishOrder() {
    navigation.navigate("finishOrder", { order_id, table });
  }
  async function handleAdd() {
    if (Number(quantity) < 1) {
      setQuantity("1");
      return;
    }
    try {
      const response = await api.post("/order/add", {
        order_id: order_id,
        product_id: productSelected?.id,
        amount: Number(quantity),
      });
      let data: ItemProps = {
        id: response.data.id,
        product_id: productSelected?.id as string,
        name: productSelected?.name as string,
        amount: Number(quantity),
      };
      setItems(prev => [...prev, data]);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleDelete(item_id: string) {
    try {
      await api.delete("/order/remove", {
        params: {
          item_id,
        },
      });
      setItems(prev => prev.filter(item => item.id !== item_id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container justify="flex-start" align="flex-start">
      <View style={{ width: "100%" }}>
        <View style={styles.row}>
          <Typography variant="title">Mesa {table}</Typography>
          {items.length === 0 && (
            <TouchableOpacity style={{ padding: 4 }} onPress={handleCloseOrder}>
              <Icon
                name="trash-outline"
                style={{ backgroundColor: "transparent" }}
                size={28}
                color={theme.color.danger}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            width: "100%",
            marginVertical: theme.spacing.lg,
            gap: theme.spacing.lg,
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
            <Button style={{ flex: 0.5 }} variant="info" onPress={handleAdd}>
              +
            </Button>
            <Button
              disabled={items.length === 0}
              style={{
                flex: 2,
                opacity: items.length === 0 ? 0.3 : 1,
              }}
              onPress={handleFinishOrder}
              variant="success">
              Avançar
            </Button>
          </View>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem handleDelete={handleDelete} data={item} />
        )}
      />

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
