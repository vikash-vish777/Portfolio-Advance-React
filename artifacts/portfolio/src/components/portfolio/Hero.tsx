import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import avatarImg from '@assets/generated_images/avatar.png';
import codeBg from '@assets/generated_images/bg-code.png';

const ROLES = ['Java Developer', 'Full Stack Enthusiast', 'BCA Student'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayedText(
          currentRole.substring(0, displayedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Background layer */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `url(${codeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-0" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-800/50 text-cyan-400 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-mono tracking-wide">Available for Internship</span>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-2">Hi, I'm</h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
                Vikash <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 glow-text">
                  Vishwakarma
                </span>
              </h1>
              <div className="h-10">
                <h3 className="text-xl md:text-3xl font-mono text-gray-300">
                  &gt; {displayedText}<span className="animate-pulse text-cyan-400">_</span>
                </h3>
              </div>
            </div>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Passionate software development student specializing in Java-based full-stack applications. Building robust backend services and modern frontend interfaces.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Let's Talk <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg border border-white/10 transition-all hover:scale-105"
              >
                Resume <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a href="https://www.linkedin.com/in/vikash-vishwakarma-702513382" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaLinkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:vikash13306@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://github.com/vikash-vish777" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Avatar / Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={avatarImg} 
                alt="Vikash Vishwakarma" 
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-6 top-20 glass-card px-4 py-2 rounded-lg flex items-center gap-2 font-mono text-sm text-cyan-300"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" /> Java
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-32 glass-card px-4 py-2 rounded-lg flex items-center gap-2 font-mono text-sm text-indigo-300"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-400" /> React
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
