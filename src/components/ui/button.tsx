import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import theme from "../../theme";
import { ReactNode } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Typography } from "./typography";

interface ButtonProps extends TouchableOpacityProps {
  size?: "small" | "large";
  variant?: keyof typeof theme.color;
  isLoading?: boolean;
  children?: ReactNode;
  icon?: "basket-outline";
}
export function Button({
  size = "small",
  variant = "primary",
  children,
  isLoading = false,
  icon,
  style,

  ...rest
}: ButtonProps) {
  const styles = StyleSheet.create({
    button: {
      width: "100%",
      maxWidth: theme.spacing.w_screen,
      height: size === "large" ? 60 : 40,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: theme.spacing.md,
      backgroundColor: theme.color[variant],
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.rounded.sm,
    },
    icon: {
      color: theme.color.text,
      fontWeight: "700",
    },
  });
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          color={theme.color.text}
          size={size === "large" ? theme.font.size.xxl : theme.font.size.xl}
        />
      ) : (
        <>
          <Typography variant="button">{children}</Typography>
          {icon && <Icon name={icon} size={25} style={styles.icon} />}
        </>
      )}
    </TouchableOpacity>
  );
}
