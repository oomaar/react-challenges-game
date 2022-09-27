import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { GlobalStyle, theme } from "./Global/GlobalStyles";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </ThemeContextProvider>
);
