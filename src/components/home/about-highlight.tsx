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
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">About Alight Ability</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                            As a registered NDIS provider, we operate under strict compliance, governance, and quality assurance frameworks. Our team includes trained support workers, nurses, and qualified professionals who are committed to delivering safe and ethical services.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground">
                            From personal care and high-intensity supports to SIL, STA, ILO, community access, and clinical nursing — our services are structured, professional, and participant-centred.

But beyond systems and standards, what truly defines us is our human approach.
                            </p>
                            <Button asChild size="lg" variant="outline" className="mt-8">
                                <Link href="/about">Learn More About Us</Link>
                            </Button>
                        </div>
                    </AnimatedContent>
                    {aboutImage && (
                        <AnimatedContent distance={50} delay={0.2}>
                            <div className="rounded-lg overflow-hidden shadow-xl relative aspect-[4/3]">
                                <Image
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    fill
                                    className="object-cover"
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
