'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Design',
    icon: 'PaintBrushIcon',
    color: 'text-primary bg-primary/10',
    skills: ['UI Design', 'UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design', 'User Research', 'Interaction Design', 'Visual Design', 'Graphic Design'],
  },
  {
    category: 'Tools',
    icon: 'WrenchScrewdriverIcon',
    color: 'text-accent bg-accent/10',
    skills: ['Adobe Illustrator', 'Canva', 'Visual Studio Code', 'Git', 'GitHub'],
  },
  {
    category: 'Frontend',
    icon: 'CodeBracketIcon',
    color: 'text-purple-500 bg-purple-500/10',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
];

const programmingSkills = ['Java', 'Python', 'SQL'];

const toolIcons = [
  { name: 'Illustrator', emoji: '✏️', color: 'bg-[#FF9A00]/10 text-[#FF9A00]' },
  { name: 'Canva', emoji: '🎭', color: 'bg-[#00C4CC]/10 text-[#00C4CC]' },
  { name: 'VS Code', emoji: '💻', color: 'bg-[#007ACC]/10 text-[#007ACC]' },
  { name: 'GitHub', emoji: '🐙', color: 'bg-foreground/10 text-foreground' },
  { name: 'HTML', emoji: '🌐', color: 'bg-[#E34F26]/10 text-[#E34F26]' },
  { name: 'CSS', emoji: '🎨', color: 'bg-[#264DE4]/10 text-[#264DE4]' },
  { name: 'React', emoji: '⚛️', color: 'bg-[#61DAFB]/10 text-[#61DAFB]' },
  { name: 'JavaScript', emoji: '⚡', color: 'bg-[#F7DF1E]/10 text-foreground' },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">Capabilities</span>
          <div className="section-divider mb-6" />
          <h2 className="text-section-title text-foreground">Skills &amp; Tools</h2>
        </motion.div>

        {/* BENTO GRID AUDIT:
            Row 1: [col-1: Design cs-1] [col-2: Tools cs-1] [col-3: Frontend cs-1]
            Row 2: [col-1: Programming cs-3 full width]
            Placed 4/4 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {skillGroups.map((group, i) => (
            /* Row 1 col-i: skill group card */
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-3xl p-6 border border-border card-hover"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${group.color}`}>
                <Icon name={group.icon as 'PaintBrushIcon'} size={18} />
              </div>
              <h3 className="text-base font-700 text-foreground mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + si * 0.04 }}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 col-1 cs-3: Programming full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card rounded-3xl p-6 border border-border mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-500/10 text-orange-500">
              <Icon name="CommandLineIcon" size={18} />
            </div>
            <h3 className="text-base font-700 text-foreground">Programming</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {programmingSkills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Animated Tool Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xs font-700 uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">Tools I Use Daily</p>
          <div className="flex flex-wrap justify-center gap-4">
            {toolIcons.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.1, y: -4 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card cursor-default ${tool.color.split(' ')[0]}`}
                style={{ minWidth: '72px' }}
              >
                <span className="text-2xl">{tool.emoji}</span>
                <span className="text-xs font-600 text-foreground whitespace-nowrap">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}