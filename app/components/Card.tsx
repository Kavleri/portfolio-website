'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Card = ({ title, desc, tech, link }: { title: string; desc: string; tech: string[]; link?: string }) => (
  <motion.a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
    className="block bg-neutral-900/50 border border-neutral-800 p-6 rounded-lg backdrop-blur-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-white font-mono group-hover:text-primary transition-colors">{title}</h3>
      {link && <ExternalLink size={18} className="text-neutral-400 group-hover:text-primary" />}
    </div>
    <p className="text-neutral-400 mb-4 text-sm leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-primary border border-neutral-700/50">
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);
