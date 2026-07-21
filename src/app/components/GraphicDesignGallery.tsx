'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
  span?: string;
}

const galleryItems: GalleryItem[] = [
{
  id: 1,
  title: 'Tech Fest Poster',
  category: 'Event Poster',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_149d27781-1772488269685.png",
  alt: 'Bold colorful tech festival event poster with geometric shapes, neon gradients on dark background, strong typography layout',
  span: 'md:col-span-2'
},
{
  id: 2,
  title: 'Social Media Creative',
  category: 'Instagram Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5cf5fb9-1774631306989.png",
  alt: 'Bright clean Instagram social media post design with pastel colors, minimal layout, and bold product photography'
},
{
  id: 3,
  title: 'College Event Banner',
  category: 'Event Banner',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e06261c8-1784297338473.png",
  alt: 'Professional college symposium banner with blue and white color scheme, clean grid layout and engineering college branding'
},
{
  id: 4,
  title: 'Brand Identity Concept',
  category: 'Logo Design',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfde7454-1784297338738.png",
  alt: 'Minimalist logo design concept on white background with geometric lettermark, brand color palette swatches displayed neatly'
},
{
  id: 5,
  title: 'Awareness Campaign',
  category: 'College Poster',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d5a0abb-1768755894257.png",
  alt: 'Clean awareness campaign poster with soft gradient background, bold headline text, and simple illustrative icons'
},
{
  id: 6,
  title: 'Symposium Branding',
  category: 'Event Branding',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1528e3f33-1784297340820.png",
  alt: 'Professional symposium branding materials spread on desk with consistent indigo and cyan color palette across multiple formats',
  span: 'md:col-span-3'
}];


export default function GraphicDesignGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14">
          
          <span className="text-xs font-700 uppercase tracking-[0.3em] text-primary mb-3 block">Visual Work</span>
          <div className="section-divider mb-6" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-section-title text-foreground">Graphic Design Gallery</h2>
            <p className="text-muted-foreground text-base max-w-sm">
              Posters, banners, social media creatives, and branding work from college projects.
            </p>
          </div>
        </motion.div>

        {/*
           BENTO GRID AUDIT:
           Array has 6 cards: [TechFest, SocialMedia, CollegeBanner, BrandIdentity, AwarenessCampaign, SymposiumBranding]
           Row 1: [col-1..2: TechFest cs-2] [col-3: SocialMedia cs-1]
           Row 2: [col-1: CollegeBanner cs-1] [col-2: BrandIdentity cs-1] [col-3: AwarenessCampaign cs-1]
           Row 3: [col-1..3: SymposiumBranding cs-3]
           Placed 6/6 cards ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
          /* Each card placed per audit map above */
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-3xl overflow-hidden bg-card border border-border ${item.span || ''} ${
            item.id === 6 ? 'h-56' : 'h-64'}`
            }>
            
              <AppImage
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110" />
            
              {/* Dark scrim for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-600 text-white/70 uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-base font-700 text-white">{item.title}</h3>
              </div>
              {/* Category badge always visible */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-600 glass-card border border-white/40 text-foreground">
                  {item.category}
                </span>
              </div>
            </motion.div>)
          )}
        </div>
      </div>
    </section>);

}