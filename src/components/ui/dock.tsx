'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Stethoscope, Mail, Briefcase, LucideIcon, HeartPulse, LucideHeartPulse, HeartPulseIcon, HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: User },
  { href: "/services", label: "Our Services", icon: HeartHandshake },
  { href: "/contact", label: "Contact Us", icon: Mail },
  { href: "/join-us", label: "Join Us", icon: Briefcase },
];

const Dock = () => {
  const hoverAreaRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);

      // Check if the user has scrolled to the bottom of the page
      const footer = document.querySelector('footer');
      if (footer) {
          const footerTop = footer.getBoundingClientRect().top;
          setIsAtBottom(footerTop < window.innerHeight);
      } else {
          const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100; // 100px buffer
          setIsAtBottom(isBottom);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // On mobile, there's no mouse to move, so we disable the animation.
    if (isMobile) return;

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
  }, [isMobile]); // Rerun this effect if isMobile changes

  const isVisible = (isMobile || hasScrolled) && !isAtBottom;

  return (
    <div
      ref={hoverAreaRef}
      className={cn(
        "fixed bottom-4 left-0 right-0 h-14 flex justify-center z-50 transition-transform duration-300 ease-in-out",
        isVisible ? 'translate-y-0' : 'translate-y-24',
        !isMobile && !hasScrolled ? 'md:hidden' : '',
      )}
    >
      <TooltipProvider>
          <div 
              ref={dockRef}
              className="flex items-center p-1 space-x-1 bg-background/50 backdrop-blur-xl border rounded-2xl shadow-lg"
          >
            {navLinks.map((link) =>
              isMobile ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center justify-center w-12 h-12 rounded-full transition-colors will-change-transform origin-bottom',
                    pathname === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  )}
                >
                  <link.icon className="w-6 h-6" />
                </Link>
              ) : (
                <Tooltip key={link.href} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center justify-center w-12 h-12 rounded-full transition-colors will-change-transform origin-bottom',
                        pathname === link.href
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-accent'
                      )}
                    >
                      <link.icon className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              )
            )}
          </div>
      </TooltipProvider>
    </div>
  );
};

export default Dock;
