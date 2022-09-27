import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./Global/GlobalStyles";
import { Providers } from "./Global/Providers/Providers";

const root = createRoot(document.getElementById("root"));

root.render(
  <Providers>
    <GlobalStyle />
    <App />
  </Providers>
);
