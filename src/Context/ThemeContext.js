import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => setDarkTheme((state) => !state);

  useEffect(() => {
    const darkLocalStorageValue = window.localStorage.getItem(
      "reactChallengeDarkValue"
    );
    darkLocalStorageValue !== null &&
      setDarkTheme(JSON.parse(darkLocalStorageValue));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "reactChallengeDarkValue",
      JSON.stringify(darkTheme)
    );
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleDarkTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
