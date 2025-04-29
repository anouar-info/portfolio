// src/context/DarkModeContext.tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface DarkModeContextProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  isInitialized: boolean;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  isDark: false,
  setIsDark: () => {},
  isInitialized: false,
});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  // Start with a default value during server-side rendering
  const [isDark, setIsDark] = useState(false);
  // Track if we've initialized from localStorage
  const [isInitialized, setIsInitialized] = useState(false);

  // This effect runs only on the client after hydration
  useEffect(() => {
    // Get the saved preference from localStorage
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = savedMode ? JSON.parse(savedMode) : false;
    
    // Update the state with the saved preference
    setIsDark(prefersDark);
    setIsInitialized(true);
    
    // Apply dark mode class based on the saved preference
    const className = "dark";
    const root = window.document.documentElement;
    
    if (prefersDark) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
  }, []);

  // This effect runs when isDark changes after initialization
  useEffect(() => {
    if (!isInitialized) return;
    
    // Save to localStorage
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    
    // Apply dark mode class
    const className = "dark";
    const root = window.document.documentElement;
    
    if (isDark) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
  }, [isDark, isInitialized]);

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark, isInitialized }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);