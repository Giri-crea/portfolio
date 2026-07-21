import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-700 text-base text-foreground">
              Girinath R<span className="text-primary">.</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">Designed &amp; Developed by Girinath R</p>
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-6 text-sm font-500 text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        {/* Right: Copyright */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}