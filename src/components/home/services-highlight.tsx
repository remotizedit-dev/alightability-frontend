import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Microscope, Pill, Stethoscope } from "lucide-react";

const services = [
    {
        icon: <HeartPulse className="w-8 h-8 text-primary" />,
        title: "Primary Care",
        description: "Comprehensive health services for all ages, focusing on prevention and wellness.",
    },
    {
        icon: <Stethoscope className="w-8 h-8 text-primary" />,
        title: "Specialty Clinics",
        description: "Access to specialized medical professionals for targeted treatment and care plans.",
    },
    {
        icon: <Pill className="w-8 h-8 text-primary" />,
        title: "Pharmacy Services",
        description: "Convenient and efficient prescription services with expert pharmacist consultations.",
    },
    {
        icon: <Microscope className="w-8 h-8 text-primary" />,
        title: "Diagnostics Lab",
        description: "State-of-the-art laboratory for accurate and timely diagnostic testing and results.",
    },
];

const ServicesHighlight = () => {
    return (
        <section id="services" className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Core Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        We offer a wide range of services to meet your health needs, ensuring comprehensive care under one roof.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 animate-fade-in-up">
                    <Button asChild size="lg">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesHighlight;
