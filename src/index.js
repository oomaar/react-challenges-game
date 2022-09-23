import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { GlobalStyle, theme } from "./Global/GlobalStyles";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
