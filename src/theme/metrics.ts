import { Dimensions, Platform } from "react-native";
import { METRICS_TYPE } from "../@types/theme";

const { width, height } = Dimensions.get("window");

export const metrics: METRICS_TYPE = {
  padding_small: 4,
  padding_default: 8,
  padding_large: 16,

  margin_small: 4,
  margin_default: 8,
  margin_large: 16,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  statusBarHeight: Platform.OS === "ios" ? 20 : 0,

  radius_small: 4,
  radius_default: 8,
  radius_large: 16,
  radius_xlarge: 24,
};
