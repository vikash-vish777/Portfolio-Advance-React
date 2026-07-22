import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-lg font-bold tracking-tighter text-white opacity-50">
          <Terminal className="w-5 h-5" />
          <span>Vikash.dev</span>
        </div>
        
        <p className="text-sm text-gray-500 font-mono text-center md:text-left">
          &copy; {year} Vikash Vishwakarma. All rights reserved.
        </p>
        
        <div className="text-sm text-gray-600">
          Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
