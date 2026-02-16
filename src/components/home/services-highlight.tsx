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
    KeyRound,
    Sprout,
    PersonStanding,
    Landmark,
    HeartPulse
} from "lucide-react";
import AnimatedContent from "../ui/animated-content";

const services = [
    {
        icon: <UserRoundCheck className="w-8 h-8 text-primary" />,
        title: "Personal Care Services",
        description: "Compassionate, dignified personal care tailored to every individual’s unique needs for daily living activities.",
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-primary" />,
        title: "High Intensity Support",
        description: "Our highly qualified Nurses provide specialist care for complex health needs, ensuring you receive the best support.",
    },
    {
        icon: <Home className="w-8 h-8 text-primary" />,
        title: "Community Nursing",
        description: "Professional community nursing services delivered in the comfort of your home.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Domestic Care",
        description: "Practical in-home support that makes everyday living easier.",
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Community Access",
        description: "Empowering meaningful participation in the community with confidence and support.",
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
    {
        icon: <Sprout className="w-8 h-8 text-primary" />,
        title: "House or Yard Maintenance",
        description: "We provide lawn mowing, garden maintenance, pruning, and general yard upkeep.",
    },
    {
        icon: <PersonStanding className="w-8 h-8 text-primary" />,
        title: "Individualized Living Options",
        description: "Our ILO supports help participants explore and establish customised living arrangements.",
    },
    {
        icon: <Landmark className="w-8 h-8 text-primary" />,
        title: "Work and Development Orders (WDO) – New South Wales",
        description: "A WDO allows you to reduce certain fines by completing approved activities instead of making payments.",
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(6, 9).map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i + 6} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(9, 12).map((service, i) => (
                            <ServiceCard key={service.title} service={service} index={i + 9} />
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
