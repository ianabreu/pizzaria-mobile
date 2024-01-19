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
  variant?: "primary" | "secondary" | "terciary";
  isLoading?: boolean;
  children?: ReactNode;
}
export function Button({
  size = "small",
  variant = "primary",
  children,
  isLoading = false,
  style,
  ...rest
}: ButtonProps) {
  const styles = StyleSheet.create({
    button: {
      width: "100%",
      maxWidth: metrics.screenWidth,
      height: size === "large" ? 60 : 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors[variant],
      paddingHorizontal: metrics.padding_lg,
      borderRadius: metrics.rounded_sm,
    },
    text: {
      color: colors.foreground,
      fontSize: size === "large" ? fonts.size.xl2 : fonts.size.xl,
      fontWeight: "700",
    },
  });
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          color={colors.foreground}
          size={size === "large" ? fonts.size.xl2 : fonts.size.xl}
        />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
