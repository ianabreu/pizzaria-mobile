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
  variant?: keyof typeof theme.color;
  isLoading?: boolean;
  children?: ReactNode;
  icon?: "basket-outline";
}
export function Button({
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
      minHeight: 45,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: theme.spacing.md,
      backgroundColor: theme.color[variant],
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.rounded.sm,
    },
    icon: {
      color: theme.color.text,
      fontFamily: theme.font.family.semibold,
    },
  });
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          color={theme.color.text}
          size={theme.font.size.xxl}
        />
      ) : (
        <>
          <Typography variant="button" size="large">
            {children}
          </Typography>
          {icon && <Icon name={icon} size={25} style={styles.icon} />}
        </>
      )}
    </TouchableOpacity>
  );
}
