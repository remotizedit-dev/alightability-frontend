import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import Dock from '@/components/ui/dock';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Alright Ability',
  description: 'Your partner in clinical excellence and patient care.',
  icons: {
    icon: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1771135406/square_alightability_icon_wgw2y9.png',
  },
  openGraph: {
    title: 'Alright Ability',
    description: 'Your partner in clinical excellence and patient care.',
    images: [
      {
        url: 'https://res.cloudinary.com/dyp8op8ov/image/upload/v1771135406/square_alightability_icon_wgw2y9.png',
        width: 512,
        height: 512,
        alt: 'Alright Ability Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Alright Ability',
    description: 'Your partner in clinical excellence and patient care.',
    images: ['https://res.cloudinary.com/dyp8op8ov/image/upload/v1771135406/square_alightability_icon_wgw2y9.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow pb-24">{children}</main>
          <Footer />
        </div>
        <Dock />
        <Toaster />
      </body>
    </html>
  );
}
