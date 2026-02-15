import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="font-bold uppercase text-foreground mb-4 tracking-wider">Navigation</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold uppercase text-foreground mb-4 tracking-wider">Legal</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/join-us" className="hover:text-primary transition-colors">Join Us</Link>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold uppercase text-foreground mb-4 tracking-wider">Socials</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            </nav>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold uppercase text-foreground mb-4 tracking-wider">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-foreground">Alright Ability</p>
              <p>Sydney, NSW 2000 Australia</p>
              <p>
                <a href="tel:1300725611" className="hover:text-primary transition-colors">1300 725 611</a>
              </p>
              <p>
                <a href="mailto:contact@alrightability.com" className="hover:text-primary transition-colors">contact@alrightability.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-muted-foreground/80">
          <p>Copyright &copy; {new Date().getFullYear()} Alright Ability. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
