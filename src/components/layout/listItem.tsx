import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemProps } from "../../pages/Order";
import { colors, fonts, metrics } from "../../theme";
import Icon from "react-native-vector-icons/Ionicons";

type ListItemProps = {
  data: ItemProps;
  handleDelete: (item_id: string) => void;
};

export function ListItem({ data, handleDelete }: ListItemProps) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.foreground,
      width: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      overflow: "hidden",

      borderRadius: 8,
      marginVertical: metrics.margin_base,
    },
    item: {
      margin: metrics.margin_lg,
      color: colors.background,
      fontSize: fonts.size.lg,
      fontWeight: "700",
    },
    btn: {
      height: "100%",
      width: "15%",
      backgroundColor: colors.error,
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
          style={{ backgroundColor: "transparent", color: colors.foreground }}
          size={25}
          color={colors.error}
        />
      </TouchableOpacity>
    </View>
  );
}
