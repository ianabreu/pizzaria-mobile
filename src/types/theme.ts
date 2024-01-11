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
  padding_sm: number;
  padding_base: number;
  padding_lg: number;
  padding_xlg: number;

  margin_sm: number;
  margin_base: number;
  margin_lg: number;
  margin_xlg: number;

  screenWidth: number;
  screenHeight: number;
  tabBarHeight: number;
  navBarHeight: number;
  statusBarHeight: number;

  rounded_sm: number;
  rounded_base: number;
  rounded_lg: number;
  rounded_xlg: number;
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
