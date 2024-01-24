import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import theme from "../../theme";

interface TypographyProps extends TextProps {
  variant?: keyof typeof STYLES;
  size?: "small" | "large" | "body";
}
enum STYLES {
  title,
  button,
  body,
  subtitle,
}

export function Typography({
  variant = "body",
  children,
  style,
  size,
  ...TextProps
}: TypographyProps) {
  const styles = StyleSheet.create({
    defaultStyles: {
      fontFamily: theme.font.family.bold,
      color: theme.color.text,
    },
    title: {
      fontSize: theme.font.size.xxxl,
    },
    subtitle: {
      fontSize: theme.font.size.xl,
      fontFamily: theme.font.family.semibold,
    },
    button: {
      fontSize: size === "large" ? theme.font.size.xl : theme.font.size.lg,
      fontFamily: theme.font.family.semibold,
    },
    body: {
      fontSize: theme.font.size.md,
      fontFamily: theme.font.family.regular,
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
