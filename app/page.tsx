'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Globe, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

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

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="mb-24"
  >
    {children}
  </motion.div>
);

const Card = ({ title, desc, tech, link }: { title: string; desc: string; tech: string[]; link?: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
    className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg backdrop-blur-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white font-mono">{title}</h3>
      {link && <ExternalLink size={18} className="text-neutral-400 hover:text-primary cursor-pointer" />}
    </div>
    <p className="text-neutral-400 mb-4 text-sm leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-primary border border-neutral-700/50">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto selection:bg-emerald-500/30">
      
      {/* Hero Section */}
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

      {/* About Section */}
      <Section>
        <div className="flex items-center gap-4 mb-8">
          <Code className="text-primary" />
          <h2 className="text-3xl font-bold font-mono">About Me</h2>
          <div className="h-px bg-neutral-800 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I am currently studying at <span className="text-white">STT Terpadu Nurul Fikri</span>, majoring in Information Technology (2024).
              My passion lies in exploring the digital frontier—from building robust web applications to understanding the intricacies of cyber defense.
            </p>
            <p>
              When I'm not coding late at night with a cup of coffee, I'm exploring new technologies in Machine Learning and contributing to the Open Source community.
            </p>
            <div className="pt-4 flex gap-4 text-sm font-mono">
              <span className="flex items-center gap-2 text-primary"><span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span> Open for work</span>
              <span className="flex items-center gap-2 text-blue-400"><Globe size={14}/> Cibinong, Indonesia</span>
            </div>
          </div>
          {/* Decorative Code Block */}
          <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 font-mono text-sm overflow-hidden relative group">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             <div className="flex gap-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <code className="text-green-400">
               const <span className="text-yellow-400">developer</span> = {'{'} <br/>
               &nbsp;&nbsp;name: <span className="text-orange-400">'Hisyam'</span>,<br/>
               &nbsp;&nbsp;skills: [<span className="text-orange-400">'Next.js'</span>, <span className="text-orange-400">'Laravel'</span>, <span className="text-orange-400">'CyberSec'</span>],<br/>
               &nbsp;&nbsp;hardWorker: <span className="text-blue-400">true</span>,<br/>
               &nbsp;&nbsp;coffeeLover: <span className="text-blue-400">true</span><br/>
               {'}'};
             </code>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section>
        <div className="flex items-center gap-4 mb-8">
          <Cpu className="text-primary" />
          <h2 className="text-3xl font-bold font-mono">Projects</h2>
          <div className="h-px bg-neutral-800 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Kavleri Portfolio" 
            desc="A modern, dark-themed portfolio website built with Next.js 14 and Tailwind CSS. Featuring smooth animations and a professional hacker aesthetic."
            tech={['Next.js', 'Tailwind', 'Framer Motion']}
            link="#"
          />
           <Card 
            title="CyberSec Lab" 
            desc="A virtual laboratory environment for testing network vulnerabilities and practicing penetration testing methodologies safely."
            tech={['Python', 'Docker', 'Linux']}
            link="#"
          />
           <Card 
            title="E-Commerce API" 
            desc="Scalable RESTful API for an e-commerce platform with authentication, payment gateway integration, and order management."
            tech={['Laravel', 'MySQL', 'Redis']}
            link="#"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-32 border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm font-mono">
        <p>© {new Date().getFullYear()} Muhammad Hisyam Alfaris. All rights reserved.</p>
        <p className="mt-2">Built with <span className="text-primary">Next.js</span> & <span className="text-primary">Passion</span>.</p>
      </footer>

    </main>
  );
}
