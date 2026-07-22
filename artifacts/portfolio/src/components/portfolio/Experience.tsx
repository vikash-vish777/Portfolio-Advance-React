import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-emerald-400">03.</span> Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-transparent" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-emerald-900/50 -translate-x-1/2 md:block hidden" />
            
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center relative">
              {/* Timeline Node */}
              <div className="absolute left-[-32px] md:left-[50%] top-6 w-4 h-4 rounded-full bg-background border-2 border-emerald-400 -translate-x-1/2 z-10 md:block hidden glow-text" />
              
              <div className="md:text-right mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white">Web Development Intern</h3>
                <div className="text-emerald-400 font-medium text-lg mb-2 flex items-center md:justify-end gap-2">
                  <Briefcase className="w-4 h-4" /> Codesoft
                </div>
                <div className="text-sm font-mono text-gray-500 flex items-center md:justify-end gap-2">
                  <Calendar className="w-4 h-4" /> August 2025 – September 2025
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-400 md:border-l-0 md:border-t-2 md:border-t-emerald-400 hover:bg-white/5 transition-colors">
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    Developed responsive and user-friendly web pages using HTML5, CSS3, and Bootstrap
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    Implemented interactive features and form validations using JavaScript
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    Designed clean UI layouts ensuring cross-browser compatibility and mobile responsiveness
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    Collaborated with team members to improve website performance and usability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">▹</span>
                    Gained hands-on experience in real-world web development practices and debugging
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
