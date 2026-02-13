import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Brain, HeartPulse, Microscope, Pill, ShieldCheck, Stethoscope, Bone } from "lucide-react";
import AnimatedContent from "@/components/ui/animated-content";

const services = [
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "General & Preventive Medicine",
    description: "Routine check-ups, immunizations, and health screenings to keep you and your family healthy.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Cardiology",
    description: "Expert care for heart conditions, including diagnosis, treatment, and ongoing management.",
  },
  {
    icon: <Baby className="w-8 h-8 text-primary" />,
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents.",
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Neurology",
    description: "Diagnosis and treatment of disorders of the nervous system.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M13.2 2.1a1.6 1.6 0 0 0-2.4 0l-6 5.9a1.6 1.6 0 0 0 0 2.4l6 5.9a1.6 1.6 0 0 0 2.4 0l6-5.9a1.6 1.6 0 0 0 0-2.4Z"/><path d="M10.8 10.2a1.6 1.6 0 0 0-2.4 0l-6 5.9a1.6 1.6 0 0 0 0 2.4l6 5.9a1.6 1.6 0 0 0 2.4 0l6-5.9a1.6 1.6 0 0 0 0-2.4Z"/></svg>,
    title: "Dermatology",
    description: "Comprehensive care for skin, hair, and nail conditions.",
  },
  {
    icon: <Pill className="w-8 h-8 text-primary" />,
    title: "Internal Medicine",
    description: "Comprehensive care for adults, focusing on the prevention and treatment of complex illnesses.",
  },
  {
    icon: <Microscope className="w-8 h-8 text-primary" />,
    title: "Laboratory Services",
    description: "On-site laboratory for fast and accurate diagnostic testing.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Oncology",
    description: "Compassionate and advanced care for patients with cancer.",
  },
];


const PageHeader = () => (
    <AnimatedContent distance={50}>
        <div className="bg-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Clinical Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A comprehensive range of healthcare services designed to meet your needs at every stage of life.
            </p>
        </div>
        </div>
    </AnimatedContent>
);


const ServicesPage = () => {
    return (
        <div>
            <PageHeader />
            <div className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedContent key={service.title} distance={50} delay={index * 0.1}>
                                <Card className="flex flex-col text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                            {service.icon}
                                        </div>
                                        <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
