import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, fonts, metrics } from "../../theme";

import { CategoryProps } from "../../types/category";
import { ProductProps } from "../../types/product";

interface ModalPickerProps {
  handleCloseModal: () => void;
  options: CategoryProps[] | ProductProps[];
  selectItem: (item: ProductProps) => void;
}

export function ModalPicker({
  handleCloseModal,
  options,
  selectItem,
}: ModalPickerProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
      width: metrics.screenWidth - 20,
      maxHeight: metrics.screenHeight / 2,
      backgroundColor: colors.foreground,
      borderWidth: 1,
      borderColor: colors.placeholder,
      borderRadius: metrics.rounded_base,
    },
    title: {
      textTransform: "uppercase",
      padding: metrics.padding_base,
      fontSize: fonts.size.xl,
      color: colors.background,
      fontWeight: "900",
    },
    option: {
      elevation: 1,
    },
    item: {
      margin: metrics.margin_lg,
      fontSize: fonts.size.lg,
      color: colors.background,
      fontWeight: "700",
    },
  });

  function onPressItem(item: ProductProps) {
    selectItem(item);
    handleCloseModal();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
      <View style={styles.content}>
        <TouchableOpacity style={[styles.option]} activeOpacity={1}>
          <Text style={styles.title}>Selecione uma opção</Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onPressItem(item)}
              style={styles.option}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}
