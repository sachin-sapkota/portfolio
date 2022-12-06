import { useTheme } from 'next-themes';

import { useState, useEffect } from 'react';

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme('light')}
        >
          change
        </div>
      );
    } else {
      return (
        <div
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme('dark')}
        >
          change
        </div>
      );
    }
  };

  return (
    <header className="h-15  dark:border-gray-700">
      <div className=" md:px-[150px] sm:px-[100px] px-[50px] py-4 flex justify-between items-center">
        {/* Logo */}

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
