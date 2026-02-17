import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import AnimatedContent from "../ui/animated-content";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import SplitText from "../ui/split-text";

const HeroSection = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white -mt-16 md:mt-0">
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
            <div className="relative z-10 container mx-auto px-4">
                <AnimatedContent distance={50}>
                    <h1 className="text-4xl md:text-6xl font-headline font-bold italic">
                        <SplitText>Alight Your Ability</SplitText>
                    </h1>
                </AnimatedContent>
                <AnimatedContent distance={50} delay={0.3}>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90">
                        Maximise your independence and live a quality & happy life.
                    </p>
                </AnimatedContent>
                <AnimatedContent distance={50} delay={0.6}>
                    <div className="mt-8 flex justify-center">
                        <Button asChild size="lg">
                            <Link href="tel:1300725611">
                                <Phone />
                                Call 1300 725 611
                            </Link>
                        </Button>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default HeroSection;
