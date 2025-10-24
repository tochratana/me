"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Web Development", href: "#web-dev" },
        { name: "Mobile Apps", href: "#mobile" },
        { name: "UI/UX Design", href: "#design" },
      ],
    },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center" onClick={closeMenu}>
            <span className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              NEXI
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div
                  className="group"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        dropdownOpen === item.name ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="absolute left-0 top-full z-10 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={() => setDropdownOpen(null)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 dark:border-gray-800 lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                      onClick={() =>
                        setDropdownOpen(
                          dropdownOpen === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          dropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
