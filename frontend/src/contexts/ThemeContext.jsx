import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context.js';

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => localStorage.getItem('nexthub-theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  const toggleTheme = useCallback(() => {
    setDark((current) => {
      const next = !current;
      localStorage.setItem('nexthub-theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  const value = useMemo(() => ({ dark, toggleTheme }), [dark, toggleTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
