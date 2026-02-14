import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, TrendingUp } from "lucide-react";
import AnimatedContent from "../ui/animated-content";

const values = [
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: "Quality",
        description: "Our top priority is quality service to ensure our participants are always happy.",
    },
    {
        icon: <Heart className="w-8 h-8 text-primary" />,
        title: "Compassion",
        description: "Caring for someone has to involve the right amount of compassion to provide the best care.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "Improvement",
        description: "We will constantly strive hard to improve our services and keep learning to provide the best service.",
    },
];

const OurValues = () => {
    return (
        <section id="values" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <AnimatedContent distance={50}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Values</h2>
                    </div>
                </AnimatedContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <AnimatedContent key={value.title} distance={50} delay={index * 0.1}>
                            <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="font-headline pt-4">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
