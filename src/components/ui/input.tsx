import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors, fonts, metrics } from "../../theme";

interface InputProps extends TextInputProps {}
export function Input({ style, ...rest }: InputProps) {
  const styles = StyleSheet.create({
    input: {
      width: "100%",
      height: 40,
      paddingHorizontal: metrics.padding_lg,
      marginBottom: metrics.margin_lg,
      borderWidth: 1,
      borderRadius: metrics.rounded_base,
      borderColor: colors.placeholder,
      backgroundColor: colors.input,
      color: colors.foreground,
      fontSize: fonts.size.lg,
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
