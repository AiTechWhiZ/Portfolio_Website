"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import Link from "next/link";
import StarField from "@/components/StarField";

export default function Resume() {
  const { currentTheme } = useTheme();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-skin-400 to-skin-500 dark:from-black dark:to-gray-900 pt-30 px-4 py-25 relative">
      <div className="dark-only absolute inset-0">
        <StarField />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Section */}
          <div
            className={`bg-linear-to-r ${currentTheme.from} ${currentTheme.to} p-8 text-white`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-4xl font-bold">JD</span>
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-bold mb-2">John Doe</h1>
                <p className="text-xl mb-4">
                  Full-Stack Developer & UI/UX Enthusiast
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.a
                  href="/VijaySajinResume.pdf"
                  download="Vijay_Sajin_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setShowPreview(true)}
                  onMouseLeave={() => setShowPreview(false)}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download PDF</span>
                </motion.a>

                {/* PDF Preview Tooltip */}
                <AnimatePresence>
                  {showPreview && (
                    <motion.div
                      initial={{ opacity: 0, x: 10, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.9 }}
                      className="fixed left-1/2 ml-96 top-1/2 transform -translate-y-1/2 z-[70]"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="w-80 h-96 relative">
                          <iframe
                            src="/VijaySajinResume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                            className="w-full h-full pointer-events-none"
                            title="Resume Preview"
                            style={{
                              pointerEvents: "none",
                              overflow: "hidden",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }}
                          />
                          <style jsx>{`
                            iframe::-webkit-scrollbar {
                              display: none;
                            }
                          `}</style>
                          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/50 to-transparent p-2">
                            <p className="text-white text-xs text-center">
                              Click to download full PDF
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-8 space-y-8">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2
                className={`text-2xl font-bold mb-4 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
              >
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate full-stack developer with 5+ years of experience
                building scalable web applications. Expertise in React, Next.js,
                Node.js, and modern web technologies. I love creating beautiful,
                functional, and user-friendly applications that solve real-world
                problems.
              </p>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2
                className={`text-2xl font-bold mb-4 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent flex items-center space-x-2`}
              >
                <Briefcase size={24} />
                <span>Experience</span>
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Senior Full-Stack Developer
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    Tech Solutions Inc.
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                    <li>
                      Led development of microservices architecture serving 1M+
                      users
                    </li>
                    <li>
                      Improved application performance by 40% through
                      optimization
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Full-Stack Developer
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      <span>2020 - 2022</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    Digital Innovations Lab
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                    <li>
                      Developed and maintained 10+ client projects using React
                      and Node.js
                    </li>
                    <li>
                      Implemented CI/CD pipelines reducing deployment time by
                      60%
                    </li>
                    <li>
                      Collaborated with UX team to improve user experience
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2
                className={`text-2xl font-bold mb-4 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent flex items-center space-x-2`}
              >
                <GraduationCap size={24} />
                <span>Education</span>
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Bachelor of Science in Computer Science
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      <span>2016 - 2020</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    University of Technology, San Francisco
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    GPA: 3.8/4.0
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2
                className={`text-2xl font-bold mb-4 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent flex items-center space-x-2`}
              >
                <Award size={24} />
                <span>Skills & Technologies</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Frontend
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Backend
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Node.js, Python, PostgreSQL, MongoDB
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Tools
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Git, Docker, AWS, CI/CD
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
