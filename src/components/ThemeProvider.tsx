
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    
    localStorage.setItem('theme', theme);

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      
      root.classList.add(systemTheme);
      
      // Set CSS variables for system preference
      if (systemTheme === 'dark') {
        applyDarkModeVariables();
      } else {
        applyLightModeVariables();
      }
      
      return;
    }

    root.classList.add(theme);
    
    // Set CSS variables based on theme
    if (theme === 'dark') {
      applyDarkModeVariables();
    } else {
      applyLightModeVariables();
    }
  }, [theme]);
  
  const applyDarkModeVariables = () => {
    document.documentElement.style.setProperty('--background', '#0D1117');
    document.documentElement.style.setProperty('--foreground', '#F9FAFB');
    document.documentElement.style.setProperty('--muted', '#1F2937');
    document.documentElement.style.setProperty('--muted-foreground', '#8B949E');
    document.documentElement.style.setProperty('--accent', '#161B22');
    document.documentElement.style.setProperty('--accent-foreground', '#F9FAFB');
    document.documentElement.style.setProperty('--primary', '#10B981');
    document.documentElement.style.setProperty('--primary-foreground', '#F9FAFB');
    document.documentElement.style.setProperty('--secondary', '#1F2937');
    document.documentElement.style.setProperty('--secondary-foreground', '#F9FAFB');
    document.documentElement.style.setProperty('--border', '#30363D');
    document.documentElement.style.setProperty('--input', '#161B22');
    document.documentElement.style.setProperty('--card', '#161B22');
    document.documentElement.style.setProperty('--card-foreground', '#F9FAFB');
    document.documentElement.style.setProperty('--popover', '#161B22');
    document.documentElement.style.setProperty('--popover-foreground', '#F9FAFB');
  };
  
  const applyLightModeVariables = () => {
    document.documentElement.style.setProperty('--background', '#FFFFFF');
    document.documentElement.style.setProperty('--foreground', '#111827');
    document.documentElement.style.setProperty('--muted', '#F3F4F6');
    document.documentElement.style.setProperty('--muted-foreground', '#6B7280');
    document.documentElement.style.setProperty('--accent', '#F3F4F6');
    document.documentElement.style.setProperty('--accent-foreground', '#111827');
    document.documentElement.style.setProperty('--primary', '#3B82F6');
    document.documentElement.style.setProperty('--primary-foreground', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary', '#F3F4F6');
    document.documentElement.style.setProperty('--secondary-foreground', '#111827');
    document.documentElement.style.setProperty('--border', '#E5E7EB');
    document.documentElement.style.setProperty('--input', '#E5E7EB');
    document.documentElement.style.setProperty('--card', '#FFFFFF');
    document.documentElement.style.setProperty('--card-foreground', '#111827');
    document.documentElement.style.setProperty('--popover', '#FFFFFF');
    document.documentElement.style.setProperty('--popover-foreground', '#111827');
  };

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
