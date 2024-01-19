import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors, fonts, metrics } from "../../theme";

interface InputProps extends TextInputProps {
  size?: "small" | "large";
}
export function Input({ size = "small", style, ...rest }: InputProps) {
  const styles = StyleSheet.create({
    input: {
      maxWidth: "100%",
      width: metrics.screenWidth,
      height: size === "large" ? 60 : 40,
      paddingHorizontal: metrics.padding_lg,
      marginBottom: metrics.margin_lg,
      borderRadius: metrics.rounded_sm,
      backgroundColor: colors.input,
      color: colors.background,
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
