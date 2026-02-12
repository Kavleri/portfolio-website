'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const TypingEffect = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 50); // Speed of typing
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

export const Hero = () => (
  <section className="min-h-[80vh] flex flex-col justify-center">
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="font-mono text-primary mb-4 flex items-center gap-2"
    >
      <Terminal size={18} />
      <span>root@kavleri:~$ ./init_portfolio.sh</span>
    </motion.div>

    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight glitch-text">
      <TypingEffect text="Muhammad Hisyam" delay={500} />
      <span className="text-primary animate-pulse">_</span>
    </h1>
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="text-xl text-neutral-400 max-w-2xl leading-relaxed"
    >
      Undergraduate Student & Full-Stack Developer. 
      Specializing in <span className="text-white font-medium">Cyber Security</span>, <span className="text-white font-medium">Web Development</span>, and <span className="text-white font-medium">Open Source</span>.
      Crafting elegant solutions for complex problems.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className="flex gap-6 mt-8"
    >
       {/* Social Links - Replace href with actual links */}
      <a href="https://github.com/Kavleri" target="_blank" className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 hover:text-primary transition-colors border border-neutral-700"><Github size={24} /></a>
      <a href="https://linkedin.com/in/muhammad-hisyam-alfaris-529465332" target="_blank" className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 hover:text-blue-400 transition-colors border border-neutral-700"><Linkedin size={24} /></a>
      <a href="mailto:muhammadhisyamalfaris2085@gmail.com" className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 hover:text-red-400 transition-colors border border-neutral-700"><Mail size={24} /></a>
    </motion.div>
  </section>
);
