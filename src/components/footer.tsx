import Link from 'next/link';
import { Button } from './ui/button';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="font-bold uppercase text-primary-foreground mb-4 tracking-wider">Navigation</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:text-primary-foreground/80 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-primary-foreground/80 transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold uppercase text-primary-foreground mb-4 tracking-wider">Legal</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/privacy-policy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link>
              <Link href="/join-us" className="hover:text-primary-foreground/80 transition-colors">Join Us</Link>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold uppercase text-primary-foreground mb-4 tracking-wider">Socials</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="https://www.facebook.com/AlightAbility" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">Instagram</a>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold uppercase text-primary-foreground mb-4 tracking-wider">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-primary-foreground">Alright Ability</p>
              <p>Sydney, NSW 2000 Australia</p>
              <div className="flex flex-col space-y-2 pt-2">
                 <Button asChild variant="ghost" className="justify-start p-1 h-auto hover:bg-primary-foreground/10">
                  <a href="tel:1300725611">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>1300 725 611</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" className="justify-start p-1 h-auto hover:bg-primary-foreground/10">
                  <a href="mailto:contact@alrightability.com">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>contact@alrightability.com</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 bg-[#01ACBE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-primary-foreground/80">
          <p>Copyright &copy; {new Date().getFullYear()} Alright Ability. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
