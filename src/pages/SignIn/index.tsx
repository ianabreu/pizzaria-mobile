import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors, metrics } from "../../theme";
import Logo from "../../components/ui/logo";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Logo />
      <TextInput style={{ backgroundColor: "white", width: "100%" }} />
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: metrics.screenWidth,
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
