import { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors, fonts, metrics } from "../../theme";

interface QuantityInputProps {
  label?: string;
}

export const QuantityInput = memo(
  ({ label = "Quantidade" }: QuantityInputProps) => {
    const [quantity, setQuantity] = useState("1");
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: metrics.margin_lg,
        height: 40,
        marginVertical: 8,
      },
      label: {
        flex: 0.8,
        fontSize: fonts.size.xl2,
        fontWeight: "700",
        color: colors.foreground,
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
        backgroundColor: colors.input,
        fontSize: fonts.size.lg,
      },
      arrowBtn: {
        flex: 1,
        backgroundColor: colors.input,
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        color: colors.background,
        fontSize: fonts.size.xl4,
        textAlign: "center",
        width: "100%",
        height: "100%",
        lineHeight: 40,
      },
    });

    function decraseQuantity() {
      if (Number(quantity) < 1) return setQuantity("1");
      if (Number(quantity) <= 1) return;
      setQuantity(prev => String(Number(prev) - 1));
    }
    function increaseQuantity() {
      setQuantity(prev => String(Number(prev) + 1));
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
        <Text style={styles.label}>{label}</Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={decraseQuantity}
            style={[
              styles.arrowBtn,
              {
                borderTopLeftRadius: metrics.rounded_sm,
                borderBottomLeftRadius: metrics.rounded_sm,
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
                borderBottomRightRadius: metrics.rounded_sm,
                borderTopRightRadius: metrics.rounded_sm,
              },
            ]}>
            <Icon name="add-outline" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
