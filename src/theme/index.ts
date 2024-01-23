import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const theme = {
  color: {
    background: "#24262F",
    text: "#FFFFFF",
    input: "#E9E9EA",
    placeholder: "#6C6E74",
    primary: "#FD5C2E",
    secondary: "#5a5a5a",
    success: "#11AD54",
    danger: "#ff3f4b",
    warning: "#ffd23f",
    info: "#3fd1ff",
  },
  font: {
    size: {
      sm: RFValue(12),
      md: RFValue(14),
      lg: RFValue(16),
      xl: RFValue(18),
      xxl: RFValue(22),
      xxxl: RFValue(26),
      xxxxl: RFValue(32),
    },
    family: {
      regular: "Montserrat-Regular",
      semibold: "Montserrat-Semibold",
      bold: "Montserrat-Bold",
    },
  },
  spacing: {
    sm: RFValue(4),
    md: RFValue(8),
    lg: RFValue(16),
    xl: RFValue(24),
    w_screen: width < height ? width : height,
    h_screen: width < height ? height : width,
  },
  rounded: {
    xs: RFValue(2),
    sm: RFValue(4),
    md: RFValue(8),
    lg: RFValue(16),
    xl: RFValue(24),
  },
};

export default theme;
