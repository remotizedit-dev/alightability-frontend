import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    UserRoundCheck,
    Home,
    ShieldCheck,
    Users,
    Car,
    SprayCan,
    BedDouble,
    KeyRound
} from "lucide-react";
import AnimatedContent from "../ui/animated-content";

const services = [
    {
        icon: <UserRoundCheck className="w-8 h-8 text-primary" />,
        title: "Personal Care Services",
        description: "Our support workers help with personal care needs like showering, grooming, and dressing.",
    },
    {
        icon: <Home className="w-8 h-8 text-primary" />,
        title: "Domestic Assistance",
        description: "We assist with daily house chores when you face challenges due to your condition.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "High Intensity Support",
        description: "Our qualified Nurses (RNs & ENs) provide specialist care for high-intensity needs.",
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Community Access",
        description: "We help you get out, promote your independence, and enjoy social and recreational activities.",
    },
    {
        icon: <Car className="w-8 h-8 text-primary" />,
        title: "Travel/Transport Support",
        description: "We provide friendly transport support for appointments and wherever you need to go.",
    },
    {
        icon: <SprayCan className="w-8 h-8 text-primary" />,
        title: "Cleaning & Home Maintenance",
        description: "Our experienced cleaners can help you with cleaning and maintaining your house and yard.",
    },
    {
        icon: <BedDouble className="w-8 h-8 text-primary" />,
        title: "Short-term Accommodation",
        description: "We help find suitable short-term accommodation for you or your loved ones to relax and have fun.",
    },
    {
        icon: <KeyRound className="w-8 h-8 text-primary" />,
        title: "Supported Independent Living",
        description: "Access qualified support workers 24/7 in your home for all your care needs with love and respect.",
    },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
    <AnimatedContent distance={50} delay={index * 0.1}>
        <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {service.icon}
                </div>
                <CardTitle className="font-headline pt-4 text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter className="pt-4 justify-center">
                <Button asChild variant="link">
                    <Link href="/services">Read More</Link>
                </Button>
            </CardFooter>
        </Card>
    </AnimatedContent>
);

const ServicesHighlight = () => {
    return (
        <section id="services" className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <AnimatedContent distance={50}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                            We offer a wide range of services to meet your health needs, ensuring comprehensive care under one roof.
                        </p>
                    </div>
                </AnimatedContent>
                
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(3, 6).map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i + 3} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-5/6 mx-auto">
                        {services.slice(6, 8).map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i + 6} />
                        ))}
                    </div>
                </div>

                <AnimatedContent distance={50}>
                    <div className="text-center mt-12">
                        <Button asChild size="lg">
                            <Link href="/services">View All Services</Link>
                        </Button>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default ServicesHighlight;
