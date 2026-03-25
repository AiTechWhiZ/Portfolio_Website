"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import StarField from "@/components/StarField";

export default function Home() {
  const { currentTheme } = useTheme();

  return (
    <div className="min-h-screen bg-linear-to-br from-skin-400 to-skin-500 dark:from-black dark:to-gray-900">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative"
      >
        <div className="dark-only absolute inset-0">
          <StarField />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
          >
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} text-white rounded-full font-medium hover:shadow-lg transition-shadow`}
          >
            View My Work
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 py-20 relative"
      >
        <div className="dark-only absolute inset-0">
          <StarField />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I am a passionate full-stack developer with expertise in modern
                web technologies. I love creating beautiful, functional, and
                user-friendly applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With a strong foundation in both frontend and backend
                development, I bring ideas to life through clean code and
                thoughtful design.
              </p>
            </div>
            <div className="h-64 bg-linear-to-br from-skin-500 to-skin-600 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">
                Profile Image
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 py-20 relative"
      >
        <div className="dark-only absolute inset-0">
          <StarField />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
          >
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Python",
              "PostgreSQL",
              "MongoDB",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-skin-500 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 py-20 relative"
      >
        <div className="dark-only absolute inset-0">
          <StarField />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: project * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-skin-500 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-linear-to-br from-skin-500 to-skin-600 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Project {project}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Amazing Project {project}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A beautiful and functional web application built with modern
                    technologies.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-skin-600 dark:bg-blue-900/30 text-white dark:text-blue-400 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-skin-600 dark:bg-green-900/30 text-white dark:text-green-400 rounded-full text-sm">
                      Node.js
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-20 relative"
      >
        <div className="dark-only absolute inset-0">
          <StarField />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full text-center"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} bg-clip-text text-transparent`}
          >
            Get In Touch
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I am always interested in hearing about new opportunities and
              exciting projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 bg-linear-to-r ${currentTheme.from} ${currentTheme.to} text-white rounded-full font-medium hover:shadow-lg transition-shadow`}
            >
              Send Me a Message
            </motion.button>
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Email
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
