'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const highlights = [
{ icon: 'PaintBrushIcon', label: 'Human-Centered Design', desc: 'Designing with empathy, always starting from user needs.' },
{ icon: 'CpuChipIcon', label: 'Modern Design Systems', desc: 'Building scalable, consistent component libraries.' },
{ icon: 'CodeBracketIcon', label: 'Frontend Development', desc: 'Bridging the gap between design and implementation.' },
{ icon: 'MagnifyingGlassIcon', label: 'Design Thinking', desc: 'Using structured problem-solving to craft better products.' }];


export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6 bg-secondary/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Education card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative">
            
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1760a238a-1772690320969.png"
                alt="Young designer at a clean desk with a laptop open to a colorful UI design project, bright natural light, minimal workspace"
                width={560}
                height={420}
                className="w-full h-[380px] object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Education card overlay */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass-card rounded-2xl p-5 shadow-card-hover border border-white/60 max-w-[260px]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="AcademicCapIcon" size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-700 text-primary uppercase tracking-wider mb-0.5">Education</p>
                  <p className="text-sm font-700 text-foreground leading-tight">B.E. Electronics &amp; Communication</p>
                  <p className="text-xs text-muted-foreground mt-1">V.S.B Engineering College, Karur</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs font-600 text-foreground">2023–2027</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs font-600 text-primary">CGPA: 7.78</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: About text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-0 lg:pt-4">
            
            <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">About Me</span>
            <div className="section-divider mb-6" />
            <h2 className="text-section-title text-foreground mb-6">
              A designer who codes,<br />
              <span className="text-gradient-primary">and thinks in systems.</span>
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8">
              <p>
                Hi, I&apos;m Girinath — a third-year Electronics and Communication Engineering student
                at V.S.B Engineering College with a genuine passion for UI/UX design. While my degree
                is in ECE, my heart has always been drawn to the intersection of technology and human experience.
              </p>
              <p>
                I&apos;m passionate about solving real user problems through thoughtful, intuitive design.
                Whether it&apos;s sketching wireframes at midnight or refining pixel-perfect prototypes in Figma,
                I believe great design is invisible — it just works.
              </p>
              <p>
                I&apos;m currently exploring Human-Centered Design principles, building responsive interfaces,
                and learning to bridge the gap between design and development using React and Next.js.
                I&apos;m actively looking for internship opportunities where I can contribute, learn, and grow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) =>
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 rounded-2xl bg-card border border-border card-hover">
                
                  <Icon name={item.icon as 'PaintBrushIcon'} size={20} className="text-primary mb-2" />
                  <p className="text-sm font-700 text-foreground mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}