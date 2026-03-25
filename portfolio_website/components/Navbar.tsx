"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Sparkles, Send } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useTheme } from "@/contexts/ThemeContext";
import { useDarkMode } from "@/contexts/DarkModeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import Tooltip from "./Tooltip";

import ProfilePicture from "../public/images/Profile Picture.jpeg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume" },
];

const Navbar = () => {
  const { currentTheme } = useTheme();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });

    setMobileOpen(false);
  };

  const current = hovered || active;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={ProfilePicture}
                alt="profile"
                fill
                sizes="40px"
                loading="eager"
                className="object-cover"
              />
            </div>

            <span
              className={`text-xl font-bold bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
            >
              Vijay
            </span>
          </div>

          {/* NAV */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => {
              const key = link.href.startsWith("#")
                ? link.href.substring(1)
                : link.href;

              return (
                <div key={link.name} className="relative">
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    className={`px-2 py-1 text-sm ${
                      current === key
                        ? `bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`
                        : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>

                  {current === key && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-linear-to-r ${currentTheme.from} ${currentTheme.to}`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Tooltip content="Change Theme Color">
              <ThemeSwitcher />
            </Tooltip>

            {/* Dark Toggle */}
            <Tooltip
              content={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg bg-linear-to-r ${currentTheme.from} ${currentTheme.to} text-white`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </Tooltip>

            {/* 🤖 AI BUTTON */}
            <Tooltip content="Toggle AI Assistant">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setAiOpen(!aiOpen)}
                className={`p-2 rounded-lg bg-linear-to-r ${currentTheme.from} ${currentTheme.to} text-white shadow-lg`}
              >
                <Sparkles size={18} />
              </motion.button>
            </Tooltip>

            {/* MOBILE */}
            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 🤖 AI POPUP */}
      <AnimatePresence>
        {aiOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-80 h-100 backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-xl shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-white/10">
              <span className="text-gray-900 dark:text-white font-semibold">
                AI Assistant
              </span>
              <button onClick={() => setAiOpen(false)}>
                <X size={18} className="text-gray-900 dark:text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto text-gray-900 dark:text-white text-sm">
              <p className="opacity-70">Ask me anything 👋</p>
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything... ✨"
                className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white outline-none"
              />
              <button
                className={`p-2 rounded-lg bg-linear-to-r ${currentTheme.from} ${currentTheme.to}`}
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
