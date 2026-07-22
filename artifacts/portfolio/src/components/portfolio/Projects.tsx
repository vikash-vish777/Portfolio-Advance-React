import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Database, Layout } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">04.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card p-8 sm:p-10 rounded-xl">
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <FolderGit2 className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Criminal Record Management System
                    </h3>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-6 mb-6 border border-white/5 text-gray-300 leading-relaxed">
                    A comprehensive GUI-based application to efficiently manage and track criminal records. 
                    The system allows law enforcement officials to perform CRUD operations (adding, viewing, updating, and deleting) securely.
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Layout className="w-4 h-4 text-cyan-500" /> Python (Tkinter)
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Database className="w-4 h-4 text-indigo-500" /> MySQL
                    </div>
                  </div>

                  <div className="flex gap-3 font-mono text-sm">
                    <span className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Desktop App</span>
                    <span className="px-3 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Database Design</span>
                    <span className="px-3 py-1 rounded bg-gray-500/10 text-gray-400 border border-gray-500/20">CRUD</span>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
