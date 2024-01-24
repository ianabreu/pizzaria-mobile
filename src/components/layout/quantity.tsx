import { memo } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../theme";
import { Typography } from "../ui/typography";

interface QuantityInputProps {
  label?: string;
  setQuantity: (text: string) => void;
  quantity: string;
}

export const QuantityInput = memo(
  ({ label = "Quantidade", quantity, setQuantity }: QuantityInputProps) => {
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing.lg,
        height: 40,
      },
      label: {
        flex: 0.8,
      },
      button: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      input: {
        flex: 1,
        textAlign: "center",
        backgroundColor: theme.color.input,
        color: theme.color.background,
        fontSize: theme.font.size.md,
      },
      arrowBtn: {
        flex: 1,
        backgroundColor: theme.color.input,
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        color: theme.color.background,
        fontSize: theme.font.size.xxxl,
        textAlign: "center",
        width: "100%",
        height: "100%",
      },
    });

    function decraseQuantity() {
      if (Number(quantity) < 1) return setQuantity("1");
      if (Number(quantity) <= 1) return;
      setQuantity(String(Number(quantity) - 1));
    }
    function increaseQuantity() {
      setQuantity(String(Number(quantity) + 1));
    }
    function handleSetQuantity(value: string) {
      let newValue = value.replace(/\D/g, "");
      if (newValue === "0") {
        newValue = "";
      }
      if (newValue.startsWith("0")) {
        let zeroOnLeft = Number(value);
        newValue = String(zeroOnLeft);
      }
      setQuantity(newValue);
    }
    function handleBlur() {
      if (quantity === "") setQuantity("1");
    }

    return (
      <View style={styles.container}>
        <Typography variant="subtitle" style={styles.label}>
          {label}
        </Typography>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={decraseQuantity}
            style={[
              styles.arrowBtn,
              {
                borderTopLeftRadius: theme.rounded.sm,
                borderBottomLeftRadius: theme.rounded.sm,
              },
            ]}>
            <Icon name="remove-outline" style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            value={quantity}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={handleSetQuantity}
            onBlur={handleBlur}
            selectTextOnFocus
          />
          <TouchableOpacity
            onPress={increaseQuantity}
            style={[
              styles.arrowBtn,
              {
                borderBottomRightRadius: theme.rounded.sm,
                borderTopRightRadius: theme.rounded.sm,
              },
            ]}>
            <Icon name="add-outline" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
