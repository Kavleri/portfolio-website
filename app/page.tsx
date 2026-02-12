import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';
import { Card } from './components/Card';
import { Section } from './components/Section';
import { Hero } from './components/Hero';
import { Code, Cpu, Globe } from 'lucide-react';

// Create a reader instance
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  // Fetch projects from Keystatic
  const projects = await reader.collections.projects.all();

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto selection:bg-emerald-500/30">
      <Hero />
      
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
          {projects.map((project) => (
            <Card 
              key={project.slug}
              title={project.entry.title} 
              desc={project.entry.description}
              tech={project.entry.tech}
              link={project.entry.link || '#'}
            />
          ))}
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
