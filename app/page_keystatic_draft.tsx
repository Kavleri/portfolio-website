import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { Card } from './components/Card'; // We need to move Card component
import { Section } from './components/Section'; // We need to move Section component
import { Hero } from './components/Hero'; // We need to move Hero component

// Create a reader instance
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  // Fetch projects from Keystatic
  const projects = await reader.collections.projects.all();

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto selection:bg-emerald-500/30">
      <Hero />
      
      {/* About Section - Static for now, can be moved to CMS later */}
      <Section>
        {/* ... existing about content ... */}
      </Section>

      {/* Projects Section - Dynamic from Keystatic */}
      <Section>
         {/* ... mapped projects ... */}
      </Section>
    </main>
  );
}
