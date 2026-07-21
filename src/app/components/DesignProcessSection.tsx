'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const processSteps = [
  {
    step: '01',
    label: 'Empathize',
    icon: 'HeartIcon',
    desc: 'Understand users through interviews, observations, and surveys to uncover real pain points.',
  },
  {
    step: '02',
    label: 'Research',
    icon: 'MagnifyingGlassIcon',
    desc: 'Analyze competitive landscape, user behaviors, and market trends to build context.',
  },
  {
    step: '03',
    label: 'Define',
    icon: 'DocumentTextIcon',
    desc: 'Synthesize research into clear problem statements, user personas, and design goals.',
  },
  {
    step: '04',
    label: 'Ideate',
    icon: 'LightBulbIcon',
    desc: 'Brainstorm divergent solutions using HMW questions, crazy 8s, and concept sketches.',
  },
  {
    step: '05',
    label: 'Wireframe',
    icon: 'Squares2X2Icon',
    desc: 'Create low-fidelity layouts to validate structure and information hierarchy early.',
  },
  {
    step: '06',
    label: 'Prototype',
    icon: 'CursorArrowRaysIcon',
    desc: 'Build interactive Figma prototypes that simulate the real user experience.',
  },
  {
    step: '07',
    label: 'Test',
    icon: 'BeakerIcon',
    desc: 'Run usability tests, gather feedback, and identify friction points in the flow.',
  },
  {
    step: '08',
    label: 'Iterate',
    icon: 'ArrowPathIcon',
    desc: 'Refine designs based on test findings, continuously improving until the goal is met.',
  },
];

const philosophyCards = [
  {
    icon: 'UserGroupIcon',
    title: 'User First',
    desc: 'Every design decision starts with a question: "Does this serve the user better?" Business goals and aesthetics come second.',
    color: 'from-primary/10 to-primary/5',
    iconColor: 'text-primary bg-primary/10',
  },
  {
    icon: 'EyeIcon',
    title: 'Accessibility Matters',
    desc: 'Good design is inclusive design. I follow WCAG guidelines to ensure my work is usable by everyone, regardless of ability.',
    color: 'from-accent/10 to-accent/5',
    iconColor: 'text-accent bg-accent/10',
  },
  {
    icon: 'SparklesIcon',
    title: 'Simple is Powerful',
    desc: 'Complexity is easy; simplicity is hard. I aim to reduce cognitive load by removing everything that doesn\'t serve the user\'s goal.',
    color: 'from-purple-500/10 to-purple-500/5',
    iconColor: 'text-purple-500 bg-purple-500/10',
  },
];

export default function DesignProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">How I Work</span>
          <div className="section-divider mb-6" />
          <h2 className="text-section-title text-foreground mb-4">My Design Process</h2>
          <p className="text-muted-foreground text-base max-w-xl">
            A structured approach to problem-solving that keeps users at the center of every decision.
          </p>
        </motion.div>

        {/* Horizontal scrollable steps */}
        <div className="relative mb-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 process-line" style={{ top: '28px', zIndex: 0 }} />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {processSteps.map((step, i) => (
              <motion.button
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveStep(i)}
                className="relative flex flex-col items-center gap-3 group"
              >
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                    activeStep === i
                      ? 'bg-primary border-primary text-white shadow-glow'
                      : 'bg-card border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary'
                  }`}
                >
                  <Icon name={step.icon as 'HeartIcon'} size={20} />
                </div>
                <span
                  className={`text-xs font-700 text-center transition-colors ${
                    activeStep === i ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {step.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active step detail */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border rounded-3xl p-8 mb-20 flex items-start gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon name={processSteps[activeStep].icon as 'HeartIcon'} size={24} className="text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-700 text-primary">{processSteps[activeStep].step}</span>
              <h3 className="text-xl font-800 text-foreground">{processSteps[activeStep].label}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{processSteps[activeStep].desc}</p>
          </div>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">Guiding Principles</span>
          <div className="section-divider mb-6" />
          <h2 className="text-section-title text-foreground">My Design Philosophy</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophyCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-gradient-to-br ${card.color} rounded-3xl p-8 border border-border card-hover overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${card.iconColor}`}>
                <Icon name={card.icon as 'UserGroupIcon'} size={22} />
              </div>
              <h3 className="text-xl font-800 text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}