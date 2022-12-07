import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { HiOutlineSun, HiSun } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const navbar = useRef(null);
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  useEffect(() => {
    if (visible) {
      navbar.current.classList.remove('bg-gray-50');
      navbar.current.classList.add('bg-white');
    } else {
      navbar.current.classList.remove('bg-white');
      navbar.current.classList.add('bg-gray-50');
    }
  }, [visible]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className="w-10 h-10 text-yellow-500 flex items-center "
          role="button"
          onClick={() => setTheme('light')}
        >
          <HiSun className="w-8 h-8" />
        </div>
      );
    } else {
      return (
        <div
          className="w-10 h-10 text-gray-900 flex items-center "
          role="button"
          onClick={() => setTheme('dark')}
        >
          <MdOutlineDarkMode className="w-8 h-8" />
        </div>
      );
    }
  };

  return (
    <>
      <header
        ref={navbar}
        className=" h-15 fixed top-0 z-[100] inset-x-0 bg-gray-50 dark:bg-black"
      >
        <div className=" md:px-[120px] sm:px-[60px] px-[30px] py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src={'/images/logo.png'}
              width={50}
              height={50}
              object-contain="true"
              alt="logo"
            />
          </Link>
          <div className="flex gap-6 items-center font-semibold text-lg ">
            {renderThemeChanger()}
            <Link href="/">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Home
              </span>
            </Link>

            <Link href="aboutme">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                About me
              </span>
            </Link>
            <Link href="/projects">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Projects
              </span>
            </Link>
            <Link href="/contacts">
              <span className="bg-indigo-500 rounded-lg py-2 px-5 text-white ">
                Contacts
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
