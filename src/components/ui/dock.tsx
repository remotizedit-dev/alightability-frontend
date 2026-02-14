'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Stethoscope, Mail, Briefcase, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: User },
  { href: "/services", label: "Our Services", icon: Stethoscope },
  { href: "/contact", label: "Contact Us", icon: Mail },
  { href: "/join-us", label: "Join Us", icon: Briefcase },
];

const Dock = () => {
  const hoverAreaRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const hoverArea = hoverAreaRef.current;
    const dock = dockRef.current;
    if (!hoverArea || !dock) return;

    const icons = Array.from(dock.querySelectorAll('a'));

    const handleMouseMove = (e: MouseEvent) => {
      icons.forEach(icon => {
        const iconBounds = icon.getBoundingClientRect();
        const iconCenterX = iconBounds.left + iconBounds.width / 2;
        const distance = e.clientX - iconCenterX;
        
        const scale = Math.max(1, 2 - Math.abs(distance) / 80);

        gsap.to(icon, {
          scale: scale,
          duration: 0.1,
          ease: 'power2.out',
        });
      });
    };
    
    const handleMouseLeave = () => {
        gsap.to(icons, { scale: 1, duration: 0.2, ease: 'power2.out' });
    }

    hoverArea.addEventListener('mousemove', handleMouseMove);
    hoverArea.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        hoverArea.removeEventListener('mousemove', handleMouseMove);
        hoverArea.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={hoverAreaRef}
      className="fixed bottom-4 left-0 right-0 h-16 flex justify-center z-50"
    >
      <TooltipProvider>
          <div 
              ref={dockRef}
              className="flex items-end h-full p-2 space-x-2 bg-background/50 backdrop-blur-xl border rounded-2xl shadow-lg"
          >
              {navLinks.map((link) => (
                  <Tooltip key={link.href} delayDuration={0}>
                      <TooltipTrigger asChild>
                          <Link
                          href={link.href}
                          className={cn(
                              "flex items-center justify-center w-12 h-12 rounded-full transition-colors will-change-transform origin-bottom",
                              pathname === link.href
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-accent"
                          )}
                          >
                              <link.icon className="w-6 h-6" />
                          </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                          <p>{link.label}</p>
                      </TooltipContent>
                  </Tooltip>
              ))}
          </div>
      </TooltipProvider>
    </div>
  );
};

export default Dock;
