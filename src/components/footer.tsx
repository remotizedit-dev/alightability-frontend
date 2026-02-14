import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image 
                src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1771094201/WhatsApp_Image_2026-02-10_at_13.14.36-removebg-preview_sal0z3.png" 
                alt="Alright Ability Logo" 
                width={150} 
                height={50}
                className="object-contain inline-block"
              />
            </Link>
            <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/join-us" className="hover:text-primary transition-colors">Careers</Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
