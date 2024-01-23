import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../theme";

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
      width: theme.spacing.w_screen - 20,
      maxHeight: theme.spacing.h_screen / 2,
      backgroundColor: theme.color.text,
      borderWidth: 1,
      borderColor: theme.color.placeholder,
      borderRadius: theme.rounded.md,
    },
    title: {
      textTransform: "uppercase",
      padding: theme.spacing.md,
      fontSize: theme.font.size.xl,
      color: theme.color.background,
      fontWeight: "900",
    },
    option: {
      elevation: 1,
    },
    item: {
      margin: theme.spacing.lg,
      fontSize: theme.font.size.lg,
      color: theme.color.background,
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
