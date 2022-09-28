import { BlogTitleContextProvider } from "../../Context/BlogTitleContext";
import { StyledThemeProvider } from "../../Context/StyledThemeProvider";
import { ThemeContextProvider } from "../../Context/ThemeContext";

export const Providers = ({ children }) => {
  return (
    <ThemeContextProvider>
      <StyledThemeProvider>
        <BlogTitleContextProvider>{children}</BlogTitleContextProvider>
      </StyledThemeProvider>
    </ThemeContextProvider>
  );
};
