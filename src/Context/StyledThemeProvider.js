import { ThemeProvider } from "styled-components";
import { lightTheme, theme } from "../Global/GlobalStyles";
import { useTheme } from "./ThemeContext";

export const StyledThemeProvider = ({ children }) => {
  const darkThemeValue = useTheme();

  return (
    <ThemeProvider theme={darkThemeValue ? theme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
