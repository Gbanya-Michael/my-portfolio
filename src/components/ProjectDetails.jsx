import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { sampleProjects } from "./HomeContent";

export default function ProjectDetails() {
  const { id } = useParams();
  const selectedProject = sampleProjects.find(
    (project) => project.id === parseInt(id)
  );

  if (!selectedProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Project not found</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-4 md:px-8 py-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h1>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Features</h2>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.features}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technology.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-xl p-4"
              >
                <img
                  src={selectedProject.smallScreenImg}
                  alt="Mobile view"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-gray-400 mt-2 text-sm">
                  Mobile View
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gray-800 rounded-xl p-4"
          >
            <img
              src={selectedProject.bigScreenImg}
              alt="Desktop view"
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center text-gray-400 mt-2 text-sm">Desktop View</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
