import { StyleSheet, Text, TextProps } from "react-native";
import theme, { colors, fonts } from "../../theme";

interface TitleProps extends TextProps {}

export function Title({ children, style, ...TextProps }: TitleProps) {
  const styles = StyleSheet.create({
    title: {
      fontSize: theme.font.size.xxxxl,
      fontWeight: "700",
      color: theme.color.text,
    },
  });
  return (
    <Text style={[styles.title, style]} {...TextProps}>
      {children}
    </Text>
  );
}
