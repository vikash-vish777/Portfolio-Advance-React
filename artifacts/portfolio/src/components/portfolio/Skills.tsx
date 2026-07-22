import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C++", "C", "SQL"]
  },
  {
    title: "Web Development",
    skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "VS Code", "Spring Boot", "Office 365"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-indigo-400">02.</span> Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="text-xl font-mono text-gray-300 mb-6 flex items-center gap-2"
              >
                <span className="text-indigo-400">#</span> {category.title}
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full glass-card border-indigo-500/20 text-gray-300 font-medium hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
