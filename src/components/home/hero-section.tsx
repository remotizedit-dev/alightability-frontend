import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 p-4 max-w-4xl mx-auto animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight">
                    Compassionate Care, <br /> Clinical Excellence.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-slate-200">
                    Alright Ability is dedicated to providing top-tier clinical services with a focus on patient well-being and innovative healthcare solutions.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/services">Explore Our Services</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
