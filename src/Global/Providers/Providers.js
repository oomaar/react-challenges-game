import { StyledThemeProvider } from "../../Context/StyledThemeProvider";
import { ThemeContextProvider } from "../../Context/ThemeContext";

export const Providers = ({ children }) => {
  return (
    <ThemeContextProvider>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </ThemeContextProvider>
  );
};
