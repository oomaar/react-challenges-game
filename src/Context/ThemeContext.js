import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = setDarkTheme((state) => !state);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleDarkTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
