'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const ScrollProgressIndicator = () => {
  const { currentTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200/20 dark:bg-gray-800/20 backdrop-blur-sm"
    >
      <motion.div
        className={`h-full bg-linear-to-r ${currentTheme.from} ${currentTheme.to} origin-left`}
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </motion.div>
  );
};

export default ScrollProgressIndicator;
