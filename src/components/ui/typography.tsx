import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import theme from "../../theme";

interface TypographyProps extends TextProps {
  variant?: keyof typeof STYLES;
  size?: "small" | "large" | "body";
}
enum STYLES {
  title,
  button,
}

export function Typography({
  variant = "title",
  children,
  style,
  size,
  ...TextProps
}: TypographyProps) {
  const styles = StyleSheet.create({
    defaultStyles: {
      fontFamily: theme.font.family.regular,
    },
    title: {
      fontFamily: theme.font.family.bold,
      fontSize: theme.font.size.xxxxl,
      color: theme.color.text,
    },
    button: {
      fontSize: size === "large" ? theme.font.size.xxl : theme.font.size.xl,
      color: theme.color.text,
    },
  });
  return (
    <Text
      style={[styles["defaultStyles"], styles[variant], style]}
      {...TextProps}>
      {children}
    </Text>
  );
}
