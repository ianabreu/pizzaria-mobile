import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemProps } from "../../pages/Order";
import theme from "../../theme";
import Icon from "react-native-vector-icons/Ionicons";

type ListItemProps = {
  data: ItemProps;
  handleDelete: (item_id: string) => void;
};

export function ListItem({ data, handleDelete }: ListItemProps) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.color.text,
      width: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      overflow: "hidden",

      borderRadius: theme.rounded.md,
      marginVertical: theme.spacing.md,
    },
    item: {
      margin: theme.spacing.lg,
      color: theme.color.background,
      fontSize: theme.font.size.lg,
      fontWeight: "700",
    },
    btn: {
      height: "100%",
      width: "15%",
      backgroundColor: theme.color.danger,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        {data.amount}x - {data.name}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleDelete(data.id)}>
        <Icon
          name="trash-outline"
          style={{ backgroundColor: "transparent", color: theme.color.text }}
          size={25}
          color={theme.color.danger}
        />
      </TouchableOpacity>
    </View>
  );
}
