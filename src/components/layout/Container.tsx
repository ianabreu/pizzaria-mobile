import { ReactNode } from "react";
import { SafeAreaView, StyleSheet, ViewProps } from "react-native";
import { colors, metrics } from "../../theme";

interface ContainerProps extends ViewProps {
  children?: ReactNode;
}

export function Container({ children, style, ...ViewProps }: ContainerProps) {
  const styles = StyleSheet.create({
    container: {
      padding: metrics.padding_lg,
      width: metrics.screenWidth,
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <SafeAreaView style={[styles.container, style]} {...ViewProps}>
      {children}
    </SafeAreaView>
  );
}
