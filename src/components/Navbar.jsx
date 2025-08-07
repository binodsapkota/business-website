import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode class on <html> when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <a
      href="#hero"
      className="text-2xl font-bold tracking-wide hover:text-pink-600 dark:hover:text-pink-400 transition"
    >
      BusinessName
    </a>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-8 font-medium">
      <li>
        <a
          href="#hero"
          className="hover:text-pink-600 dark:hover:text-pink-400 transition"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="hover:text-pink-600 dark:hover:text-pink-400 transition"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className="hover:text-pink-600 dark:hover:text-pink-400 transition"
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="hover:text-pink-600 dark:hover:text-pink-400 transition"
        >
          Contact
        </a>
      </li>
    </ul>

    {/* Right controls */}
    <div className="flex items-center space-x-4">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="focus:outline-none text-xl hover:text-pink-600 dark:hover:text-pink-400 transition"
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6 transition-colors duration-300">
      <ul className="flex flex-col space-y-4 font-medium text-lg text-gray-900 dark:text-white">
        {["hero", "services", "portfolio", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="block hover:text-pink-600 dark:hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>


  );
};

export default Navbar;
