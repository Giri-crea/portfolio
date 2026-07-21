'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  role: string;
  image: string;
  imageAlt: string;
  tags: string[];
  problem: string;
  research: string;
  outcome: string;
  tech: string[];
  responsibilities: string[];
  color: string;
}

const projects: Project[] = [
{
  id: 1,
  title: 'WikiQuiz',
  subtitle: 'AI-Powered Wikipedia Quiz Generator',
  role: 'UI/UX Designer + Frontend Developer',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef494e29-1772252488119.png",
  imageAlt: 'Colorful quiz interface on a laptop screen with bright purple and blue gradients, clean card-based question layout',
  tags: ['UI Design', 'UX Research', 'Frontend Dev'],
  problem: 'Students struggle to create engaging quizzes from Wikipedia articles. Existing tools are generic and don\'t adapt to the content\'s complexity level.',
  research: 'Conducted user interviews with 12 college students. Found 83% wanted auto-generated quizzes from study materials with difficulty control.',
  outcome: 'Reduced quiz creation time from 45 minutes to under 2 minutes. 94% of test users rated the interface as "easy to use" in usability testing.',
  tech: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Wikipedia API'],
  responsibilities: ['Designed complete user flow', 'Created responsive interface', 'Built interactive quiz experience', 'Improved usability through testing'],
  color: 'bg-primary/5 border-primary/20'
},
{
  id: 2,
  title: 'Emotion Detect',
  subtitle: 'Human Emotion Detection & Music Recommendation',
  role: 'UI Designer',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19a39c9c8-1784093414744.png",
  imageAlt: 'Dark analytics dashboard with emotion detection graphs, colorful data visualizations, and music recommendation cards on screen',
  tags: ['Dashboard Design', 'Data Visualization', 'Python UI'],
  problem: 'Emotion-based music systems lacked a clear, readable interface. Users couldn\'t understand what emotion was detected or why a song was recommended.',
  research: 'Mapped 5 key user emotions to music genres. Designed for real-time feedback loops where users could see detection confidence scores.',
  outcome: 'Dashboard reduced cognitive load by presenting complex ML outputs in simple visual metaphors. Improved user trust in AI recommendations by 40%.',
  tech: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
  responsibilities: ['Designed emotion detection dashboard', 'Created music recommendation screens', 'Designed responsive layouts', 'Visualized real-time ML data'],
  color: 'bg-accent/5 border-accent/20'
}];


export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14">
          
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">Featured Work</span>
          <div className="section-divider mb-6" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-section-title text-foreground">
              UI/UX Case Studies
            </h2>
            <p className="text-muted-foreground text-base max-w-md">
              Each project follows a complete design thinking process — from user research to high-fidelity prototypes.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) =>
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-3xl border bg-card overflow-hidden card-hover ${project.color}`}>
            
              {/* Project image */}
              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {project.tags.map((tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-600 glass-card border border-white/40 text-foreground">
                  
                      {tag}
                    </span>
                )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-800 text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-600 whitespace-nowrap flex-shrink-0">
                    {project.role.split(' ')[0]}
                  </span>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) =>
                <span key={t} className="skill-pill text-xs">{t}</span>
                )}
                </div>

                {/* Expandable case study */}
                <button
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                className="w-full flex items-center justify-between text-sm font-600 text-primary hover:text-primary/80 transition-colors py-2 border-t border-border">
                
                  <span>{expanded === project.id ? 'Hide Case Study' : 'View Case Study'}</span>
                  <Icon
                  name={expanded === project.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={16} />
                
                </button>

                {expanded === project.id &&
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 space-y-4">
                
                    {[
                { icon: 'ExclamationTriangleIcon', label: 'Problem', text: project.problem },
                { icon: 'MagnifyingGlassIcon', label: 'Research', text: project.research },
                { icon: 'CheckCircleIcon', label: 'Outcome', text: project.outcome }].
                map((item) =>
                <div key={item.label} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name={item.icon as 'CheckCircleIcon'} size={15} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-700 text-foreground uppercase tracking-wider mb-1">{item.label}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                )}

                    <div className="pt-2">
                      <p className="text-xs font-700 text-foreground uppercase tracking-wider mb-2">Responsibilities</p>
                      <ul className="space-y-1">
                        {project.responsibilities.map((r) =>
                    <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {r}
                          </li>
                    )}
                      </ul>
                    </div>
                  </motion.div>
              }
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}