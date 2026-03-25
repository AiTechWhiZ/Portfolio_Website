'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, MessageCircle, ArrowUp, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: Code,
      tooltip: 'View my GitHub profile',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: Briefcase,
      tooltip: 'Connect on LinkedIn',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      icon: MessageCircle,
      tooltip: 'Follow me on Twitter',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Enhanced Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:animate-bounce" />
            <span className="absolute -top-8 right-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-orange-25 dark:bg-gray-900 border-t border-orange-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
              >
                John Doe
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 max-w-sm"
              >
                Full-stack developer passionate about creating beautiful and functional web experiences.
              </motion.p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`text-lg font-semibold bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
              >
                Quick Links
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(`#${link.toLowerCase()}`);
                      }}
                      className={`text-gray-600 dark:text-gray-400 transition-colors relative group`}
                      onMouseEnter={(e) => {
                        e.currentTarget.className = e.currentTarget.className.replace('text-gray-600 dark:text-gray-400', `bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent relative group`);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.className = e.currentTarget.className.replace(`bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent relative group`, 'text-gray-600 dark:text-gray-400 transition-colors relative group');
                      }}
                    >
                      {link}
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} w-0 group-hover:w-full transition-all duration-300`}></div>
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Enhanced Social Links */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`text-lg font-semibold bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
              >
                Connect With Me
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <div key={social.name} className="relative">
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`relative flex items-center justify-center w-10 h-10 bg-orange-50 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 transition-all duration-300 group`}
                        onMouseEnter={(e) => {
                          setHoveredIcon(social.name);
                          e.currentTarget.className = e.currentTarget.className.replace('text-gray-600 dark:text-gray-400', `text-white bg-gradient-to-r ${currentTheme.from} ${currentTheme.to}`);
                        }}
                        onMouseLeave={(e) => {
                          setHoveredIcon(null);
                          e.currentTarget.className = e.currentTarget.className.replace(`text-white bg-gradient-to-r ${currentTheme.from} ${currentTheme.to}`, 'text-gray-600 dark:text-gray-400');
                        }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={20} className="group-hover:animate-pulse" />
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} opacity-0 group-hover:opacity-20 transition-opacity`} />
                      </motion.a>
                      <AnimatePresence>
                        {hoveredIcon === social.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-50"
                          >
                            {social.tooltip}
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Enhanced Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-orange-100 dark:border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-500 dark:text-gray-400">
                  © {currentYear} John Doe. All rights reserved.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                  <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {isAvailable ? '🟢 Available for Work' : '🔴 Currently Busy'}
                  </span>
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
                  Built with modern technologies
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-orange-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mini Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-6 pt-6 border-t border-orange-100/50 dark:border-gray-800/50"
            >
              <div className="flex flex-wrap justify-center items-center space-x-6 text-sm">
                <span className="text-gray-400 dark:text-gray-500">Quick Links:</span>
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`text-gray-500 dark:text-gray-400 transition-colors flex items-center space-x-1`}
                    onMouseEnter={(e) => {
                      e.currentTarget.className = e.currentTarget.className.replace('text-gray-500 dark:text-gray-400', `bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent flex items-center space-x-1`);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.className = e.currentTarget.className.replace(`bg-gradient-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent flex items-center space-x-1`, 'text-gray-500 dark:text-gray-400 flex items-center space-x-1');
                    }}
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;