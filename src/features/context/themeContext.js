import { createContext } from "react";

export const themes = {
  dark: "",
  light: "App-orange",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});