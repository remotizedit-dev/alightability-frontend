import Image from "next/image";
import AnimatedContent from "../ui/animated-content";

const MissionSection = () => {
    return (
        <section id="mission" className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedContent distance={50} delay={0.2}>
                        <div className="rounded-lg overflow-hidden shadow-xl aspect-video relative">
                            <Image
                                src="https://res.cloudinary.com/dyp8op8ov/image/upload/f_auto,q_auto,w_auto/v1771098751/carousel-1_j8sujh.png"
                                alt="Caregiver assisting a person in a wheelchair."
                                fill
                                className="object-cover"
                                data-ai-hint="caregiver person"
                            />
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
