// DarkModeToggle.tsx
"use client";
import { useDarkModeContext } from "@/context/DarkModeContext";
import Image from "next/image";

const DarkModeToggle: React.FC = () => {
  const { isDark, setIsDark, isInitialized } = useDarkModeContext();
  // Only render the toggle button after client-side initialization
  if (!isInitialized) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className="cursor-pointer h-6 w-6" aria-hidden="true">
        wait
      </div>
    );
  }
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Image
          src="/assets/sun (2).png"
          alt="Sun icon - switch to light mode"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/assets/moon (2).png"
          alt="Moon icon - switch to dark mode"
          className="w-6 h-6"
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
