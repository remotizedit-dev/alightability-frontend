import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import AnimatedContent from "../ui/animated-content";

const AboutHighlight = () => {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-team');

    return (
        <section id="about" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedContent distance={50}>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">About Alright Ability</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Alight Ability is established as a NDIS service provider in the Greater Sydney Region. Our team of passionate and skilled employees focus on helping our lovely participants along with their family to achieve all their goals. At Alight Ability our priority is caring for our participants with love and affection to provide true people centred quality supports and services.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Our team of dedicated professionals works tirelessly to advance medical practices and ensure every patient receives the attention and treatment they deserve.
                            </p>
                            <Button asChild size="lg" variant="outline" className="mt-8">
                                <Link href="/about">Learn More About Us</Link>
                            </Button>
                        </div>
                    </AnimatedContent>
                    {aboutImage && (
                        <AnimatedContent distance={50} delay={0.2}>
                            <div>
                                <Image
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    width={1024}
                                    height={341}
                                    className="w-full h-auto object-contain"
                                    data-ai-hint={aboutImage.imageHint}
                                />
                            </div>
                        </AnimatedContent>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutHighlight;
