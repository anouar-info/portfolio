// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-transparent dark:bg-transparent font-space container mx-auto px-4 py-6">
        <div className="w-full flex justify-between items-center">
          {/* Brand */}
          <Link href="/" className="flex flex-col items-start">
            <span className="text-xl text-blue-800 font-bold dark:text-blue-100 font-jetbrains">
              Anouar Faraji
            </span>
            <span className="text-sm text-blue-600 dark:text-blue-300 font-space">
              /ˈæn.wɑːr fəˈrɑːd͡ʒi/
            </span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex md:justify-center md:space-x-10 lg:space-x-12">
            {menuItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-oceanLight dark:text-blue-100 text-xl font-semibold transition-colors duration-200 hover:text-gold dark:hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="ml-4">
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <div
            id="navbar-menu"
            className="mt-4 md:hidden rounded-lg border border-gray-100 bg-gray-50 p-4 dark:bg-gray-800 dark:border-gray-700 flex flex-col space-y-4"
          >
            {menuItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 text-center text-blue-800 dark:text-blue-100 text-xl font-semibold transition-colors duration-200 hover:text-gold dark:hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
