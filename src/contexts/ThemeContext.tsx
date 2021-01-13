import { createContext } from 'react';

interface ContextTypes {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextTypes>({
  theme: 'dark',
  toggleTheme: () => {},
});
