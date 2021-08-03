import React from 'react';
import { useTheme } from 'next-themes';
import { TiAdjustBrightness } from 'react-icons/ti';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-12 w-12 order-2 md:order-3 rounded transition duration-500 hover:scale-110"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <TiAdjustBrightness size={30} />
    </button>
  );
}

export default ThemeToggleButton;
