import { Image, Pressable } from "react-native";

function Logo() {
  return (
    <Pressable style={{ width: "100%" }}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: "100%", height: 80, objectFit: "contain" }} // Verifique se 'background' está correto
      />
    </Pressable>
  );
}

export default Logo;
