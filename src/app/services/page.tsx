import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundCheck, Home, ShieldCheck, Users, Car, SprayCan, BedDouble, KeyRound } from "lucide-react";
import AnimatedContent from "@/components/ui/animated-content";

const services = [
  {
    icon: <UserRoundCheck className="w-8 h-8 text-primary" />,
    title: "Personal Care Services",
    description: "Our lovely support workers will help you take care of all your Personal care needs such as showering, grooming, dressing, care for.........",
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Domestic Assistance",
    description: "When you face challenges, due to your condition, to complete your day to day house chores our staff will help you............",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "High Intensity Support",
    description: "If you have high needs don’t worry our highly qualified Nurses are here to save the day! Our RNs and ENs can provide specialist care..",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Community Access, Social and Recreational Activities",
    description: "Our helpful support workers are always ready to take you out and to promote your true independence. We can help you go to.....",
  },
  {
    icon: <Car className="w-8 h-8 text-primary" />,
    title: "Travel/Transport Support",
    description: "Our friendly support workers will assist you with transport to wherever you need to go such as: Attending regular appointments ......",
  },
  {
    icon: <SprayCan className="w-8 h-8 text-primary" />,
    title: "Cleaning and Home Maintenance Support",
    description: "We understand that you may need a bit of help in cleaning or maintaining your house/yard. So, our experienced cleaners .....",
  },
  {
    icon: <BedDouble className="w-8 h-8 text-primary" />,
    title: "Short-term Accommodation",
    description: "If you or your loved ones need a little break then we can help you or your loved ones find a suitable accommodation where they can stay, relax and have fun. You and your loved.....................",
  },
  {
    icon: <KeyRound className="w-8 h-8 text-primary" />,
    title: "Supported Independent Living",
    description: "In Supported Independent Living with us you have access to qualified support workers 24/7 in your home so all your care needs will be taken care of with love and respect......",
  },
];


const PageHeader = () => (
    <AnimatedContent distance={50}>
        <div className="bg-secondary py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
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
                                <Card className="flex flex-col text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
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
