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
                            <h2 className="text-3xl md:text-4xl font-headline font-bold">What Makes Us Different</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                            At Alight Ability, we do not define people by their diagnosis, their past, or their perceived complexity. We recognise the whole person — their culture, their story, their strengths, and their struggles.
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground">
                            We are proud to support individuals from diverse cultural backgrounds and those who may have experienced stigma, forensic histories, trauma, or social exclusion. Our commitment is clear: we do not turn people away because their lives are complex.
                            </p>
                            
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
