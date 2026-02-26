import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedContent from "@/components/ui/animated-content";

const PageHeader = () => (
  <AnimatedContent distance={50}>
    <div className="relative py-20 lg:py-32 text-white">
      <Image
        src="https://res.cloudinary.com/dyp8op8ov/image/upload/f_auto,q_auto,w_auto/v1771328219/iStock-525028968_sq1paj.png"
        alt="Alight Ability Banner"
        fill 
        className="object-cover"
        data-ai-hint="company banner"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold italic">About Alight Ability</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
          Learn about our journey, mission, and the dedicated team committed to your well-being.
        </p>
      </div>
    </div>
  </AnimatedContent>
);

const aboutTeamImage = PlaceHolderImages.find(p => p.id === 'about-team');
const missionVisionImage = PlaceHolderImages.find(p => p.id === 'mission-vision');

const AboutPage = () => {
  return (
    <div>
      <PageHeader />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedContent distance={50} delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {aboutTeamImage && (
                <div className="rounded-lg overflow-hidden shadow-xl aspect-square relative">
                  <Image
                    src={aboutTeamImage.imageUrl}
                    alt={aboutTeamImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutTeamImage.imageHint}
                  />
                </div>
              )}
              <div>
                <h2 className="text-3xl font-headline font-bold">Our Story</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Alight Ability was founded in 2022 with a simple but powerful belief — that every person with a disability carries a unique light within them. Our role is not to control that light, but to help alight it so it can shine brightly and confidently.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                What began as a mission to deliver high-quality disability support grounded in compassion has grown into a registered NDIS provider operating across Sydney, Canberra, Adelaide, Melbourne, Brisbane, and Perth. While our footprint has expanded nationally, our heart remains deeply personal.
                </p>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16 lg:mt-24">
              <div>
                <h2 className="text-3xl font-headline font-bold">Mission & Vision</h2>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                  <strong>Our Mission:</strong> At Alight Ability, our mission is to deliver exceptional, person-centered disability support grounded in empathy, integrity, and professionalism. We are committed to providing safe, high-quality care tailored to individual goals, embracing cultural diversity, and supporting people with complex needs without discrimination. We build trusted, long-term relationships with participants, families, and communities — ensuring every person feels valued, respected, and empowered to shine.



                </p>
                <p className="mt-4 text-lg text-muted-foreground text-justify">
                  <strong>Our Vision:</strong> To become the most beloved and trusted NDIS support provider across Australia, recognised for delivering compassionate, culturally responsive, and high-quality care that empowers every individual to live with dignity, independence, and purpose.
                </p>
              </div>
              {missionVisionImage && (
                <div className="rounded-lg overflow-hidden shadow-xl aspect-square relative">
                  <Image
                    src={missionVisionImage.imageUrl}
                    alt={missionVisionImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={missionVisionImage.imageHint}
                  />
                </div>
              )}
            </div>
          </AnimatedContent>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedContent distance={50}>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Core Values</h2>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedContent distance={50} delay={0.2}>
              <Card>
                <CardHeader>
                  <Award className="mx-auto h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-headline">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our top priority is quality service to ensure our participants are always happy.</p>
                </CardContent>
              </Card>
            </AnimatedContent>
            <AnimatedContent distance={50} delay={0.3}>
              <Card>
                <CardHeader>
                  <Target className="mx-auto h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-headline">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Caring for someone has to involve the right amount of compassion to provide the best care.</p>
                </CardContent>
              </Card>
            </AnimatedContent>
            <AnimatedContent distance={50} delay={0.4}>
              <Card>
                <CardHeader>
                  <Users className="mx-auto h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-headline">Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We constantly strive hard to improve our services and keep learning to provide the best service.</p>
                </CardContent>
              </Card>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
