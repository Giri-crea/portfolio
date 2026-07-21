'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const achievements = [
  {
    icon: 'BuildingOfficeIcon',
    title: 'Infosys Springboard Internship',
    subtitle: 'Full Stack Development Internship',
    desc: 'Completed an intensive full-stack development program through Infosys Springboard, building real-world web applications.',
    tag: 'Internship',
    tagColor: 'bg-primary/10 text-primary',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'NPTEL Certifications',
    subtitle: 'IIT & IISc Courses',
    desc: 'Completed multiple NPTEL certifications in areas including Programming in Java and Cloud Computing from IIT institutes.',
    tag: 'Certification',
    tagColor: 'bg-accent/10 text-accent',
  },
  {
    icon: 'CpuChipIcon',
    title: 'AI-Powered Projects',
    subtitle: 'WikiQuiz & Emotion Detection',
    desc: 'Built two AI-integrated projects combining ML models with thoughtful UX design — both presented at college technical fests.',
    tag: 'Project',
    tagColor: 'bg-purple-500/10 text-purple-500',
  },
];

const filteredAchievements = achievements.filter(
  (item) =>
    item.title !== 'Technical Presentations' &&
    item.subtitle !== 'College Symposiums'
);

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">Recognition</span>
          <div className="section-divider mb-6" />
          <h2 className="text-section-title text-foreground">Achievements &amp; Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredAchievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-3xl p-6 card-hover flex gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as 'BuildingOfficeIcon'} size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-700 text-foreground leading-tight">{item.title}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-600 flex-shrink-0 ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm font-600 text-primary mb-2">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
