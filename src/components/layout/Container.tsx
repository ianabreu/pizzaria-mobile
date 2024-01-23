import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, ViewProps } from "react-native";
import theme from "../../theme";

interface ContainerProps extends ViewProps {
  children?: ReactNode;
  justify?:
    | "center"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-end";
  align?: "center" | "flex-start" | "flex-end";
}

export function Container({
  children,
  justify = "center",
  align = "center",
  style,
  ...ViewProps
}: ContainerProps) {
  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing.lg,
      width: theme.spacing.w_screen,
      flex: 1,
      backgroundColor: theme.color.background,
      alignItems: align,
      justifyContent: justify,
    },
  });
  return (
    <SafeAreaView style={[styles.container, style]} {...ViewProps}>
      {children}
    </SafeAreaView>
  );
}
