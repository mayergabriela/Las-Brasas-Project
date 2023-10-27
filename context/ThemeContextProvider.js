import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Inicialmente, se establece en "light"

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

  
  const data = [theme, toggleTheme];

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
