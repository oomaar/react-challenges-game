import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProps {
    colors: {
      titleColor: string;
      textColor: string;
      primaryColor: string;
      borderColor: string;
      bodyColor: string;
      buttonColor: string;
      formColor: string;
      alert: string;
      warning: string;
      success: string;
      scrollBarColor: string;
      scrollBarThumb: string;
      scrollBarThumbHover: string;
      containerColor: string;
    };
    transition: {
      fast: string;
      medium: string;
      slow: string;
    };
    index: {
      top: string;
      middle: string;
      bottom: string;
    };
  }
}
