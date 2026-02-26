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
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">Who We Are</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We are a collective of passionate and dedicated professionals who believe in making a tangible difference. Our team brings together a diverse range of skills and experiences, united by a shared commitment to compassion, quality, and continuous improvement.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We work collaboratively to provide person-centered care that empowers our participants and enriches their lives, fostering an environment of trust and respect.
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
