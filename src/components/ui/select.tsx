import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import theme from "../../theme";
import { memo } from "react";

interface SelectProps extends TouchableOpacityProps {
  optionSelected: string | undefined;
}
export const Select = memo(
  ({ optionSelected, disabled, ...rest }: SelectProps) => {
    const styles = StyleSheet.create({
      input: {
        backgroundColor: theme.color.input,
        borderRadius: theme.rounded.sm,
        width: "100%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: theme.spacing.md,
      },
      text: {
        fontSize: theme.font.size.lg,
        color: disabled ? theme.color.placeholder : theme.color.background,
      },
    });

    return (
      <TouchableOpacity disabled={disabled} style={styles.input} {...rest}>
        <Text style={styles.text}>{optionSelected && optionSelected}</Text>
      </TouchableOpacity>
    );
  },
);
