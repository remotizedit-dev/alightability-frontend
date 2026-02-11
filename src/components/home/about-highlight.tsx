import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const AboutHighlight = () => {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-team');

    return (
        <section id="about" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">About Alright Ability</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Founded on the principles of integrity, innovation, and inclusivity, Alright Ability has been a cornerstone of community health for over a decade. Our mission is to deliver exceptional clinical care that is both accessible and personalized.
                        </p>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our team of dedicated professionals works tirelessly to advance medical practices and ensure every patient receives the attention and treatment they deserve.
                        </p>
                        <Button asChild size="lg" variant="outline" className="mt-8">
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                    {aboutImage && (
                        <div className="rounded-lg overflow-hidden shadow-xl aspect-video relative animate-fade-in-up [animation-delay:200ms]">
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutHighlight;
