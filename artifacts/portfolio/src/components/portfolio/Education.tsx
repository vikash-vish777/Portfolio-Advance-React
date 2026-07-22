import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-pink-400">06.</span> Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-l-4 border-l-pink-500">
            <div className="w-24 h-24 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 border border-pink-500/20">
              <GraduationCap className="w-12 h-12 text-pink-400" />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
              <div className="text-xl text-pink-400 mb-4 font-medium">Sandip University</div>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 font-mono text-sm">
                <MapPin className="w-4 h-4" /> Nashik, Maharashtra, India
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
