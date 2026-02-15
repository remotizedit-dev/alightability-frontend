"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/join-us", label: "Join Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out",
          "hidden md:block", // Only show on desktop
          "pt-4",
          hasScrolled ? "-translate-y-[150%]" : "translate-y-0",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 px-6">
            <Link href="/">
              <Image 
                src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1771152105/icon_white_ybhufg.png" 
                alt="Alright Ability Logo" 
                width={80} 
                height={80}
                className="object-contain"
                priority
              />
            </Link>
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-bold transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Sheet) is kept for mobile navigation, but is not triggered from the top bar anymore. The Dock is the primary nav on mobile, but this sheet can be triggered if a hamburger icon is added elsewhere. For now, it's unused. */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div
          className="fixed inset-0 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
        <div className="fixed top-0 right-0 h-full w-full max-w-xs bg-background shadow-lg p-6 animate-in slide-in-from-right-full duration-300">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image 
                src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1771094201/WhatsApp_Image_2026-02-10_at_13.14.36-removebg-preview_sal0z3.png" 
                alt="Alright Ability Logo" 
                width={150} 
                height={50}
                className="object-contain"
              />
            </Link>
            <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
