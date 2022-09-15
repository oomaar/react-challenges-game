import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    titleColor: "#e7e9ea",
    textColor: "#6c7176",
    primaryColor: "#1d9bf0",
    borderColor: "#1d2022",
    bodyColor: "#000000",
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.bodyColor};
  }
`;
