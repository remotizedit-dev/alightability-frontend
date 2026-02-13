"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
          "fixed top-0 left-0 w-full z-40 transition-all duration-300",
          hasScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent",
          "hidden" // Hiding the old navbar
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-headline font-bold text-primary transition-colors hover:text-primary/80">
              Alright Ability
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : (hasScrolled ? "text-foreground" : "text-white")
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="md:hidden">
              <Button onClick={() => setIsOpen(true)} variant="ghost" size="icon" className={cn(hasScrolled ? "text-foreground" : "text-white", "hover:text-primary")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
            <Link href="/" className="text-2xl font-headline font-bold text-primary">
              Alright Ability
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
