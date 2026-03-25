"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import StarField from "@/components/StarField";

export default function Home() {
  const { currentTheme } = useTheme();

  // ✅ Reusable gradient
  const gradient = `bg-linear-to-r ${currentTheme.from} ${currentTheme.to}`;
  const gradientText = `${gradient} bg-clip-text text-transparent`;

  return (
    <div className="min-h-screen bg-linear-to-br from-skin-400 to-skin-500 dark:from-black dark:to-gray-900">
      {/* ================= HOME ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="dark-only absolute inset-0 z-0">
          <StarField />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl z-10"
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${gradientText}`}>
            Vijay Sajin
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Full-Stack Developer • AI Builder • UI/UX Enthusiast
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-8 py-3 ${gradient} text-white rounded-full font-medium shadow-md hover:shadow-xl`}
          >
            View My Work
          </motion.button>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="dark-only absolute inset-0 z-0">
          <StarField />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl z-10"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 ${gradientText}`}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I build modern, scalable web apps using React, Next.js, and AI.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I focus on performance, design, and real-world impact.
              </p>
            </div>

            <div className="h-64 bg-linear-to-br from-skin-500 to-skin-600 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">
                Your Image Here
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="dark-only absolute inset-0 z-0">
          <StarField />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl w-full z-10"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 ${gradientText}`}
          >
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Node.js",
              "Python",
              "MongoDB",
              "PostgreSQL",
            ].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="bg-skin-500 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center cursor-pointer"
              >
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="dark-only absolute inset-0 z-0">
          <StarField />
        </div>

        <motion.div className="max-w-6xl w-full z-10">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-12 ${gradientText}`}
          >
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((p) => (
              <motion.div
                key={p}
                whileHover={{ y: -8 }}
                className="bg-skin-500 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-linear-to-br from-skin-500 to-skin-600 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <span className="text-gray-400">Project {p}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Project {p}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Modern web application with clean UI.
                  </p>

                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-skin-600 rounded-full text-white text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-skin-600 rounded-full text-white text-sm">
                      Node
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="dark-only absolute inset-0 z-0">
          <StarField />
        </div>

        <motion.div className="max-w-2xl w-full text-center z-10">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 ${gradientText}`}
          >
            Contact
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Let’s build something amazing 🚀
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            className={`px-8 py-3 ${gradient} text-white rounded-full shadow-md hover:shadow-xl`}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
