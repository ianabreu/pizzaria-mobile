import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors, fonts, metrics } from "../../theme";
import { memo } from "react";

interface SelectProps extends TouchableOpacityProps {
  optionSelected: string | undefined;
}
export const Select = memo(
  ({ optionSelected, disabled, ...rest }: SelectProps) => {
    const styles = StyleSheet.create({
      input: {
        backgroundColor: colors.input,
        borderRadius: metrics.rounded_sm,
        width: "100%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: metrics.padding_base,
      },
      text: {
        fontSize: fonts.size.lg,
        color: disabled ? colors.placeholder : colors.background,
      },
    });

    return (
      <TouchableOpacity disabled={disabled} style={styles.input} {...rest}>
        <Text style={styles.text}>{optionSelected && optionSelected}</Text>
      </TouchableOpacity>
    );
  },
);
