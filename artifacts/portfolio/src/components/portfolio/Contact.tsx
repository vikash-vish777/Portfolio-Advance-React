import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            
            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <a href="mailto:vikash13306@gmail.com" className="flex items-center gap-6 p-6 glass-card rounded-xl hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-1">Email</div>
                  <div className="text-lg text-gray-200 group-hover:text-cyan-300 transition-colors">vikash13306@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919838655493" className="flex items-center gap-6 p-6 glass-card rounded-xl hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-1">Phone</div>
                  <div className="text-lg text-gray-200 group-hover:text-indigo-300 transition-colors">+91 9838655493</div>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 glass-card rounded-xl">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-1">Location</div>
                  <div className="text-lg text-gray-200">Nashik, Maharashtra, India</div>
                </div>
              </div>
            </motion.div>

            {/* Call to action big button */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group border-cyan-500/30 hover:border-cyan-400 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 transition-colors" />
              
              <FaLinkedin className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Connect on LinkedIn</h3>
              <p className="text-gray-400 mb-8">
                Let's connect professionally. I'm always open to discussing new opportunities, full-stack projects, and tech.
              </p>
              
              <a 
                href="https://www.linkedin.com/in/vikash-vishwakarma-702513382" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-cyan-950 font-bold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] relative z-10"
              >
                Say Hello <Send className="w-4 h-4 ml-1" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
