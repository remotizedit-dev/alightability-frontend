'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  children: string;
  className?: string;
  charClassName?: string;
  wordClassName?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className,
  charClassName = 'inline-block',
  wordClassName = 'inline-block mr-[0.25em]',
  delay = 0,
  duration = 0.6,
  ease = 'power3.out',
  stagger = 0.03,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.innerHTML = '';
    const words = children.split(' ');

    words.forEach(word => {
      const wordDiv = document.createElement('div');
      wordDiv.className = wordClassName;
      wordDiv.style.display = 'inline-block';
      
      const chars = word.split('');
      if (chars.length === 0) return;

      chars.forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.className = charClassName;
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        gsap.set(charSpan, { yPercent: 100 });
        wordDiv.appendChild(charSpan);
      });
      el.appendChild(wordDiv);
    });

    const chars = Array.from(el.querySelectorAll(`span`));

    if (chars.length > 0) {
        gsap.to(chars, {
          yPercent: 0,
          duration,
          ease,
          stagger,
          delay,
        });
    }

  }, [children, charClassName, wordClassName, delay, duration, ease, stagger]);

  return <div ref={ref} className={cn(className)} aria-label={children} />;
};

export default SplitText;
