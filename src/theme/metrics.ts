import { Dimensions, Platform } from "react-native";
import { METRICS_TYPE } from "../types/theme";

const { width, height } = Dimensions.get("window");

export const metrics: METRICS_TYPE = {
  padding_sm: 4,
  padding_base: 8,
  padding_lg: 16,
  padding_xlg: 24,

  margin_sm: 4,
  margin_base: 8,
  margin_lg: 16,
  margin_xlg: 24,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === "ios" ? 64 : 54,
  statusBarHeight: Platform.OS === "ios" ? 20 : 0,

  rounded_sm: 4,
  rounded_base: 8,
  rounded_lg: 16,
  rounded_xlg: 24,
};
