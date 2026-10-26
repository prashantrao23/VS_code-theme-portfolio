import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";
type ToggleSidebar = true | false;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  toggleSidebar: ToggleSidebar;
  toggleExplorer: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [toggleSidebar, setToggleSidebar] = useState<ToggleSidebar>(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const toggleExplorer = () => {
    setToggleSidebar((prev) => (prev === false ? true : false));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleSidebar, toggleExplorer }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}