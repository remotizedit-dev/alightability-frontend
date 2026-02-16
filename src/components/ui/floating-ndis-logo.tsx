'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const FloatingNdisLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // a small threshold to avoid triggering on minor scrolls
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link href="https://www.ndis.gov.au/" target="_blank" rel="noopener noreferrer" className={cn(
        'fixed top-[30vh] right-4 z-50 transition-all duration-500 ease-in-out',
        isScrolled ? 'w-24 h-24' : 'w-36 h-36 md:w-40 md:h-40'
    )}>
        <Image
            src="https://res.cloudinary.com/dyp8op8ov/image/upload/f_auto,q_auto,w_auto/v1771240431/NDIS_y9urkg.png"
            alt="NDIS Registered Provider"
            fill
            className="object-contain"
        />
    </Link>
  );
};

export default FloatingNdisLogo;
