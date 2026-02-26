import Image from "next/image";
import AnimatedContent from "../ui/animated-content";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const WhoWeAreSection = () => {
    const image = PlaceHolderImages.find(p => p.id === 'who-we-are');

    return (
        <section id="who-we-are" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedContent distance={50}>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Commitment</h2>
                            <p className="mt-4 text-lg text-muted-foreground text-justify">
                            We believe:
	<br />•	Every person deserves respect.
	<br />•	Every culture deserves understanding.
	<br />•	Every struggle deserves compassion.
	<br />•	Every individual deserves a chance to thrive.
<br /><br />
Alight Ability is more than a service provider — we are partners in your journey.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground text-justify">
                            Where others may see complexity, we see potential.
<br />Where others may see limitation, we see ability.
<br /><br />
Alighting Your Ability — so you can shine.
                            </p>
                        </div>
                    </AnimatedContent>
                    {image && (
                        <AnimatedContent distance={50} delay={0.2}>
                            <div className="rounded-lg overflow-hidden shadow-xl relative aspect-[4/3]">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                        </AnimatedContent>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
