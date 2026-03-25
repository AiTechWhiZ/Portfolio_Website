"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useDarkMode } from "@/contexts/DarkModeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const { currentTheme } = useTheme();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" },
  ];

  const updateUnderlinePosition = (linkElement: HTMLElement) => {
    const navContainer = linkElement.parentElement;
    if (navContainer) {
      const containerRect = navContainer.getBoundingClientRect();
      const linkRect = linkElement.getBoundingClientRect();
      setUnderlineStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  };

  // Check if we're on the resume page (only on mount)
  useEffect(() => {
    if (window.location.pathname === "/resume") {
      setActiveSection("/resume");
    }
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position (exclude Resume link)
      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Initialize and update underline position when active section or hovered link changes
  useEffect(() => {
    const targetLink = hoveredLink || activeSection;
    const linkElement = document.querySelector(
      `[data-nav-link="${targetLink}"]`,
    ) as HTMLElement;
    if (linkElement) {
      updateUnderlinePosition(linkElement);
    }
  }, [activeSection, hoveredLink]);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      // Navigate to page (Resume)
      window.location.href = href;
    } else {
      // If on resume page, navigate to home first, then scroll to section
      if (window.location.pathname === "/resume") {
        window.location.href = `/#${href.substring(1)}`;
      } else {
        // Scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center space-x-3"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center space-x-3"
            >
              {/* Photo */}
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gradient-to-r from-blue-500 to-purple-600">
              </div>
              {/* Initials */}
              <span
                className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
              >
                JD
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 relative">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  data-nav-link={
                    link.href.startsWith("#")
                      ? link.href.substring(1)
                      : link.href
                  }
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() =>
                    setHoveredLink(
                      link.href.startsWith("#")
                        ? link.href.substring(1)
                        : link.href,
                    )
                  }
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection ===
                      (link.href.startsWith("#")
                        ? link.href.substring(1)
                        : link.href) ||
                    hoveredLink ===
                      (link.href.startsWith("#")
                        ? link.href.substring(1)
                        : link.href)
                      ? `bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              {/* Moving Underline */}
              <motion.div
                className={`absolute bottom-0 h-0.5 bg-gradient-to-r ${currentTheme.from} ${currentTheme.to}`}
                animate={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </div>
          </div>

          {/* Theme Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Color Theme Switcher */}
            <ThemeSwitcher />

            {/* Dark/Light Toggle */}
            <div className="relative group">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} text-white hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              {/* Tooltip showing current color theme */}
              <div className="absolute -bottom-8 right-0 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                Theme: {currentTheme.name}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-800/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 relative">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  data-nav-link={
                    link.href.startsWith("#")
                      ? link.href.substring(1)
                      : link.href
                  }
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() =>
                    setHoveredLink(
                      link.href.startsWith("#")
                        ? link.href.substring(1)
                        : link.href,
                    )
                  }
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    activeSection ===
                      (link.href.startsWith("#")
                        ? link.href.substring(1)
                        : link.href) ||
                    hoveredLink ===
                      (link.href.startsWith("#")
                        ? link.href.substring(1)
                        : link.href)
                      ? `bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              {/* Moving Underline for Mobile */}
              <motion.div
                className={`absolute bottom-0 h-0.5 bg-gradient-to-r ${currentTheme.from} ${currentTheme.to}`}
                animate={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
