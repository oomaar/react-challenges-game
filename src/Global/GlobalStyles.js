import { createGlobalStyle } from "styled-components";

// View Ports
export const xlScreen = `1024px`;
export const lgScreen = `768px`;
export const mdScreen = `425px`;
export const smScreen = `375px`;
export const xsScreen = `320px`;

// Constants
export const NavbarHeight = `70px`;

export const theme = {
  colors: {
    titleColor: "#e7e9ea",
    textColor: "#6c7176",
    primaryColor: "#1d9bf0",
    borderColor: "#1d2022",
    bodyColor: "#000000",
    alert: `#d51e55`,
    warning: `#f2b77e`,
    success: `#2bac76`,
    scrollBarColor: `hsl(219, 8%, 38%)`,
    scrollBarThumb: `hsl(219, 8%, 26%)`,
    scrollBarThumbHover: `hsl(219, 8%, 20%)`,
  },
  transition: {
    fast: `all 0.3s ease-in`,
    medium: `all 0.4s ease-in`,
    slow: `all 0.5s ease-in`,
  },
  index: {
    top: "1000",
    middle: "500",
    bottom: "100",
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
    font-family: 'Cairo', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};

    :hover, :active, :visited {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textColor};

    }
  }

    /* Scroll Bar */
    ::-webkit-scrollbar {
      width: 0.6rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.scrollBarColor};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.scrollBarThumb};
      border-radius: 0.5rem;

      :hover {
        background-color: ${({ theme }) => theme.colors.scrollBarThumbHover};
      }
  }

    /* Text Highlight */
    ::selection {
      background-color: ${({ theme }) => theme.colors.success};
      color: #000;
    }
`;
