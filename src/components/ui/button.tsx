import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors, fonts, metrics } from "../../theme";
import { ReactNode } from "react";

interface ButtonProps extends TouchableOpacityProps {
  size?: "small" | "large";
  isLoading?: boolean;
  children?: ReactNode;
}
export function Button({
  size = "small",
  children,
  isLoading = false,
  ...rest
}: ButtonProps) {
  const styles = StyleSheet.create({
    button: {
      width: size === "large" ? "90%" : "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.secondary,
      paddingHorizontal: metrics.padding_lg,
      borderRadius: metrics.rounded_sm,
    },
    text: {
      color: colors.background,
      fontSize: size === "large" ? fonts.size.xl2 : fonts.size.xl,
      fontWeight: "700",
    },
  });
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={colors.background} size={fonts.size.xl} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
