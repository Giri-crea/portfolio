'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const roles = ['UI/UX Designer', 'Graphic Designer', 'Frontend Developer'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((r) => (r + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden grid-bg">
      
      {/* Background blobs */}
      <div
        className="blob-primary absolute rounded-full pointer-events-none"
        style={{ width: 600, height: 600, top: '-10%', left: '-15%' }}
        aria-hidden="true" />
      
      <div
        className="blob-accent absolute rounded-full pointer-events-none"
        style={{ width: 500, height: 500, bottom: '0%', right: '-10%' }}
        aria-hidden="true" />
      
      <div
        className="blob-purple absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, top: '40%', right: '20%' }}
        aria-hidden="true" />
      
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit">
              
              <span className="w-2 h-2 rounded-full bg-accent pulse-ring" />
              <span className="text-xs font-600 text-primary tracking-wide">
                Open to Internships · Tamil Nadu, India
              </span>
            </motion.div>

            <motion.div custom={1} initial="hidden" animate="show" variants={fadeUp}>
              <p className="text-xl font-500 text-muted-foreground mb-2">Hello 👋</p>
              <h1 className="text-hero-xl text-foreground">
                I&apos;m{' '}
                <span className="text-gradient-primary">Girinath . R</span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="h-12 flex items-center">
              
              <span className="text-2xl md:text-3xl font-700 text-foreground">
                {displayed}
                <span className="blink-cursor text-primary">|</span>
              </span>
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              
              &ldquo;I design intuitive digital experiences that combine creativity,
              usability, and clean visual design.&rdquo;
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap gap-3 pt-2">
              
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-600 hover:scale-105 active:scale-95 transition-transform shadow-glow">
                
                View Portfolio
                <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/drive/folders/15_cKhUKaEV-9HiTLnt9lPi111baoRQsV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-full text-sm font-600 hover:border-primary hover:text-primary transition-all">
                
                <Icon name="ArrowDownTrayIcon" size={16} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 bg-accent/5 text-accent rounded-full text-sm font-600 hover:bg-accent hover:text-white transition-all">
                
                Contact Me
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex gap-6 pt-4 border-t border-border">
              
              {[
              { label: 'CGPA', value: '7.78' },
              { label: 'Projects', value: '10+' },
              { label: 'Tools', value: '12+' }].
              map((stat) =>
              <div key={stat.label}>
                  <p className="text-2xl font-800 text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Figma-style illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block">
            
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-border bg-card">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_19bf6fb1d-1772977104560.png"
                alt="Designer working on UI design in a bright modern workspace with multiple screens showing colorful interface mockups"
                width={600}
                height={420}
                priority
                className="w-full h-[380px] object-cover" />
              
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
            </div>

            {/* Floating card: Tool indicator */}
            <div className="floating-card absolute -top-6 -left-6 glass-card rounded-2xl p-4 shadow-card-hover border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-600 text-foreground">Figma</p>
                  <p className="text-xs text-muted-foreground">Designing now</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-green-400 ml-1" />
              </div>
            </div>

            {/* Floating card: Current frame */}
            <div className="floating-card-delayed absolute -bottom-4 -right-6 glass-card rounded-2xl p-4 shadow-card-hover border border-white/60 max-w-[200px]">
              <p className="text-xs text-muted-foreground mb-2">Current Frame</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs font-800">F</span>
                </div>
                <span className="text-sm font-600 text-foreground">Dashboard v3</span>
              </div>
              <div className="flex gap-1">
                {['bg-primary', 'bg-accent', 'bg-purple-400', 'bg-pink-400'].map((c, i) =>
                <div key={i} className={`w-5 h-5 rounded-full ${c}`} />
                )}
              </div>
            </div>

            {/* Floating badge: Available */}
            <div className="absolute top-4 right-4 glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-card border border-white/60">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-600 text-foreground">Available for Internships</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="text-xs text-muted-foreground font-500">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-primary" />
          
        </div>
      </motion.div>
    </section>);

}