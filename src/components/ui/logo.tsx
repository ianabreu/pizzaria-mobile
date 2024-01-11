import { Image, Pressable, StyleSheet } from "react-native";
interface LogoProps {
  mb?: number;
  height?: number;
}

export function Logo({ mb = 18, height = 100 }: LogoProps) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "auto",
      marginBottom: mb,
    },
    image: {
      width: "100%",
      height: height,
      objectFit: "contain",
    },
  });
  return (
    <Pressable style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
    </Pressable>
  );
}
