import { StyleSheet, TextInput, TextInputProps } from "react-native";
import theme from "../../theme";

interface InputProps extends TextInputProps {
  size?: "small" | "large";
}
export function Input({ size = "small", style, ...rest }: InputProps) {
  const styles = StyleSheet.create({
    input: {
      fontFamily: theme.font.family.regular,
      maxWidth: "100%",
      width: theme.spacing.w_screen,
      paddingHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.lg,
      borderRadius: theme.rounded.sm,
      backgroundColor: theme.color.input,
      color: theme.color.background,
      fontSize: size === "large" ? theme.font.size.lg : theme.font.size.md,
    },
  });
  return (
    <TextInput
      placeholderTextColor={theme.color.placeholder}
      style={[styles.input, style]}
      {...rest}
    />
  );
}
