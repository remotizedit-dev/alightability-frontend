import Image from "next/image";
import AnimatedContent from "../ui/animated-content";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const MissionSection = () => {
    const missionImage = PlaceHolderImages.find(p => p.id === 'mission-nurse');

    return (
        <section id="mission" className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedContent distance={50} delay={0.2}>
                        <div className="rounded-lg overflow-hidden shadow-xl relative aspect-[4/3]">
                            {missionImage && (
                                <Image
                                    src={missionImage.imageUrl}
                                    alt={missionImage.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={missionImage.imageHint}
                                />
                            )}
                        </div>
                    </AnimatedContent>
                    <AnimatedContent distance={50}>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mission</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Our mission is to help you alight your abilities so that you can maximise your independence and live a quality & happy life. We want to be the most loved provider in Australia by providing you with a safe and nurturing environment which will help you to flourish in life.
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
