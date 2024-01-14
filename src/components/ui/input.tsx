import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors, fonts, metrics } from "../../theme";

interface InputProps extends TextInputProps {
  size?: "small" | "large";
}
export function Input({ size = "small", style, ...rest }: InputProps) {
  const styles = StyleSheet.create({
    input: {
      width: size === "large" ? "90%" : "100%",
      height: size === "large" ? 60 : 40,
      paddingHorizontal: metrics.padding_lg,
      marginBottom: metrics.margin_lg,
      borderWidth: 0.5,
      borderRadius: metrics.rounded_sm,
      borderColor: colors.placeholder,
      backgroundColor: colors.input,
      color: colors.foreground,
      fontSize: size === "large" ? fonts.size.xl2 : fonts.size.lg,
      textAlign: "left",
    },
  });
  return (
    <TextInput
      placeholderTextColor={colors.placeholder}
      style={[styles.input, style]}
      {...rest}
    />
  );
}
