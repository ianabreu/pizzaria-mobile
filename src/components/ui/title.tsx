import { StyleSheet, Text, TextProps } from "react-native";
import { colors, fonts } from "../../theme";

interface TitleProps extends TextProps {}

export function Title({ children, style, ...TextProps }: TitleProps) {
  const styles = StyleSheet.create({
    title: {
      fontSize: fonts.size.xl4,
      fontWeight: "700",
      color: colors.foreground,
    },
  });
  return (
    <Text style={[styles.title, style]} {...TextProps}>
      {children}
    </Text>
  );
}
