export interface COLOR_TYPE {
  background: string;
  foreground: string;
  input: string;
  placeholder: string;
  primary: string;
  secondary: string;
  terciary: string;
  cancel: string;
}

export interface METRICS_TYPE {
  padding_small: number;
  padding_default: number;
  padding_large: number;
  margin_small: number;
  margin_default: number;
  margin_large: number;
  screenWidth: number;
  screenHeight: number;
  tabBarHeight: number;
  navBarHeight: number;
  statusBarHeight: number;
  radius_small: number;
  radius_default: number;
  radius_large: number;
  radius_xlarge: number;
}
export interface FONTS_TYPE {
  family: {
    regular: string;
    bold: string;
    styled: string;
  };
  size: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
}
