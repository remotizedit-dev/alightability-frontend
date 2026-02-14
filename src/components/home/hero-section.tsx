import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const HeroSection = () => {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
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
        </section>
    );
};

export default HeroSection;
