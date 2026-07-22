import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 space-y-6 leading-relaxed"
          >
            <p>
              I am a passionate software development student at Sandip University, pursuing my Bachelor of Computer Applications (BCA). My journey in tech is driven by an insatiable curiosity for how things work under the hood.
            </p>
            <p>
              Specializing in <span className="text-white font-medium">Java-based full-stack applications</span>, I have hands-on experience developing robust backend services using Spring Boot and weaving them together with modern, responsive frontend interfaces.
            </p>
            <p>
              I consider myself a quick learner with strong problem-solving skills. Currently, I am actively seeking a challenging internship role where I can contribute to real-world projects and continue leveling up my engineering skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Terminal, title: 'Backend', desc: 'Java, Spring Boot, MySQL' },
              { icon: Code, title: 'Frontend', desc: 'React, Tailwind, Bootstrap' },
              { icon: Cpu, title: 'Problem Solving', desc: 'Data Structures & Algorithms' },
              { icon: GraduationCap, title: 'Student', desc: 'BCA @ Sandip University' },
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group">
                <item.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
