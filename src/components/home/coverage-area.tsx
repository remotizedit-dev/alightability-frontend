import Image from "next/image";
import AnimatedContent from "../ui/animated-content";

const CoverageArea = () => {
    return (
        <section id="coverage" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <AnimatedContent distance={50}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">The Area We Cover</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            We proudly provide services across Sydney, Canberra, Adeliade & Perth , ensuring our community has access to quality care.
                        </p>
                    </div>
                </AnimatedContent>
                <AnimatedContent distance={50} delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <Image
                            src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1771567772/Frame_967_ycmohd.png"
                            alt="Map of Australia highlighting the Sydney, canberra, Adelaide, Perth Region"
                            width={1024}
                            height={768}
                            className="w-full h-auto object-contain rounded-lg"
                            data-ai-hint="Sydney map"
                        />
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default CoverageArea;
