'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    name: 'Kavitha Subramanian',
    role: 'Project Teammate',
    company: 'V.S.B Engineering College',
    avatar: 'https://i.pravatar.cc/100?img=45',
    text: 'Girinath designed the entire frontend for our WikiQuiz project. His attention to spacing, color, and user flow was genuinely impressive — it looked like a production app, not a college project.',
    stars: 5,
  },
  {
    name: 'Arjun Ramaswamy',
    role: 'Project Collaborator',
    company: 'Emotion Detection Project',
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'Working with him on the emotion detection UI was great. He quickly understood the ML pipeline and translated complex data into a clean, readable dashboard. Very user-focused mindset.',
    stars: 5,
  },
  {
    name: 'Preethi Nair',
    role: 'Design Club Lead',
    company: 'V.S.B Engineering College',
    avatar: 'https://i.pravatar.cc/100?img=47',
    text: 'Girinath consistently delivers polished designs for our college events. His posters stand out because he thinks about hierarchy and readability, not just aesthetics.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">What People Say</span>
          <div className="section-divider mb-6" />
          <h2 className="text-section-title text-foreground">Peer Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials?.map((t, i) => (
            <motion.div
              key={t?.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-3xl p-6 card-hover flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t?.stars })?.map((_, si) => (
                  <Icon key={si} name="StarIcon" size={14} variant="solid" className="text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                &ldquo;{t?.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <AppImage
                  src={t?.avatar}
                  alt={`Portrait of ${t?.name}, ${t?.role} at ${t?.company}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-700 text-foreground">{t?.name}</p>
                  <p className="text-xs text-muted-foreground">{t?.role} · {t?.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}