import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedContent from "@/components/ui/animated-content";

const PageHeader = () => (
  <AnimatedContent distance={50}>
    <div className="bg-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">About Alright Ability</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Learn about our journey, our mission, and the dedicated team committed to your health and well-being.
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
                <div>
                  <Image
                    src={aboutTeamImage.imageUrl}
                    alt={aboutTeamImage.description}
                    width={1024}
                    height={341}
                    className="w-4/5 h-auto object-contain mx-auto"
                    data-ai-hint={aboutTeamImage.imageHint}
                  />
                </div>
              )}
              <div>
                <h2 className="text-3xl font-headline font-bold">Our Story</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Alright Ability was founded with a simple yet powerful vision: to create a healthcare experience that prioritizes patients above all else. From our humble beginnings as a small community clinic, we have grown into a leading institution known for clinical innovation and compassionate care.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our journey has been one of continuous learning and adaptation, always striving to integrate the latest medical advancements while maintaining the personal touch that defines us.
                </p>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16 lg:mt-24">
              <div className="md:order-2">
                <h2 className="text-3xl font-headline font-bold">Mission & Vision</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  <strong>Our Mission:</strong> To provide accessible, high-quality, and comprehensive healthcare services to our community, fostering a healthier future for all.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  <strong>Our Vision:</strong> To be a leader in patient-centered care, recognized for our clinical excellence, innovative research, and unwavering commitment to the well-being of every individual we serve.
                </p>
              </div>
              {missionVisionImage && (
                <div className="rounded-lg overflow-hidden shadow-xl aspect-video relative md:order-1">
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
                  <CardTitle className="font-headline">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We strive for the highest standards in all we do, from clinical care to patient support.</p>
                </CardContent>
              </Card>
            </AnimatedContent>
            <AnimatedContent distance={50} delay={0.3}>
              <Card>
                <CardHeader>
                  <Target className="mx-auto h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-headline">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are committed to ethical practices, transparency, and earning the trust of our patients.</p>
                </CardContent>
              </Card>
            </AnimatedContent>
            <AnimatedContent distance={50} delay={0.4}>
              <Card>
                <CardHeader>
                  <Users className="mx-auto h-10 w-10 text-primary mb-4" />
                  <CardTitle className="font-headline">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are dedicated to serving and uplifting our community through health and wellness initiatives.</p>
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
