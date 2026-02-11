import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah L.",
            title: "Patient",
            quote: "The care I received at Alright Ability was exceptional. The staff were attentive, and I felt genuinely cared for throughout my treatment.",
        },
        {
            name: "Dr. Michael C.",
            title: "Partner Physician",
            quote: "Collaborating with Alright Ability has elevated my practice. Their commitment to quality and patient outcomes is second to none.",
        },
        {
            name: "Jane D.",
            title: "Family Member",
            quote: "Navigating healthcare for my mother was challenging until we found Alright Ability. They made the process seamless and stress-free.",
        },
    ];

    return (
        <section id="testimonials" className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">What People Are Saying</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Hear from our patients, partners, and community members who have experienced our commitment to care.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <Card className="flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6 flex-grow">
                                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                </CardContent>
                                <CardHeader className="flex-row items-center gap-4 pt-4">
                                    <Avatar>
                                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
