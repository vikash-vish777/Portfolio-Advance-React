import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const achievements = [
  {
    title: "Certificate of Appreciation",
    event: "NASA International Space Apps Challenge 2025",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Certificate of Achievement",
    event: "Workshop on Basic Programming using Python",
    color: "from-amber-500 to-orange-400"
  },
  {
    title: "Certificate of Participation",
    event: "Galactic Problem Solver",
    color: "from-purple-500 to-pink-400"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-amber-400">05.</span> Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/10"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${ach.color} transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{ach.title}</h3>
                
                <div className="mt-auto pt-6 flex items-start gap-2 text-gray-400">
                  <Star className="w-4 h-4 mt-1 flex-shrink-0 text-amber-400/50" />
                  <span className="text-sm font-medium">{ach.event}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
