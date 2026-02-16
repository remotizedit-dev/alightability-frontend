import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedContent from "@/components/ui/animated-content";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    imageId: "service-personal-care",
    title: "Personal Care Services", 
    description: "Our lovely support workers will help you take care of all your Personal care needs such as showering, grooming, dressing, care for incontinence, pressure area care as well as assistance with eating & drinking at meal times and also assistance to take your own medication.",
  },
  {
    imageId: "service-domestic-assistance",
    title: "Domestic Assistance",
    description: "When you face challenges, due to your condition, to complete your day to day house chores our staff will help you to complete them. We can help you to cook, light clean around the house, tidy up clothes or do the washing.",
  },
  {
    imageId: "service-high-intensity",
    title: "High Intensity Support",
    description: "If you have high needs don’t worry our highly qualified Nurses are here to save the day! Our RNs and ENs can provide specialist care supports for Bowel Care, Catheter Care, Medication Administration, Trachea Care, Complex Wound Care, PEG Feeding and Subcutaneous Injections.",
  },
  {
    imageId: "service-community-access",
    title: "Community Access, Social and Recreational Activities",
    description: "Our helpful support workers are always ready to take you out to promote your true independence. We can help you go to and from appointments, shops, carry shopping bags, attend games and events, go to Gym, meet families and friends or to join community programs and religious events. Someday you might feel a bit creative so our imaginative support workers can help you to do a bit of arts and crafts. You can also try out some cooking or bake a beautiful cake with your friends. You can also attend other activities such as fitness classes, golf, dance classes, gym etc.",
  },
  {
    imageId: "service-travel-support",
    title: "Travel/Transport Support",
    description: "Our friendly support workers will assist you with transport to wherever you need to go such as:  Attending regular appointments  Visiting a park, beach or lookouts Attending gym, swimming, golf and bowling Going out for movies or shopping Meeting with families and friends Attending religious and cultural gatherings Attending  any kind of regular classes Going to doctors or allied health appointments",
  },
  {
    imageId: "service-cleaning-maintenance",
    title: "Cleaning and Home Maintenance Support",
    description: "We understand that you may need a bit of help in cleaning or maintaining your house/yard. So, our experienced cleaners and gardeners will support you to keep your home a clean and well maintained place so it is safe for you. We can help you with :   General cleaning – Household cleaning such as vacuuming, moping, wiping & dusting. Deep cleaning – Specialised cleaning for toilets, outside areas, windows, steam cleaning or forensic cleaning. Gardening – Regular lawn mowing, hedging, weeding, pruning, green waste removal, clearing garden beds.",
  },
  {
    imageId: "service-short-term-accom",
    title: "Short-term Accommodation",
    description: "If you or your loved ones need a little break then we can help you or your loved ones find a suitable accommodation where they can stay, relax and have fun. You and your loved ones can be completely stress free as the accommodation will cater to all your needs and will have a qualified staff available 24/7 to help with all your care needs. You will be supported with all your daily activities such as meals, showering, dressing, medication and also other extracurricular activities.",
  },
  {
    imageId: "service-independent-living",
    title: "Supported Independent Living",
    description: "In Supported Independent Living with us you have access to qualified support workers 24/7 in your home so all your care needs will be taken care of with love and respect. We provide you a quality home where you can feel safe and supported by your support workers. You can socialise with other residents and play social games or engage in activities which can help to build your skills making you more independent. We will help you to achieve your goals by having supports tailored to your needs and make sure that you have fun doing it.",
  },
];


const PageHeader = () => (
    <AnimatedContent distance={50}>
        <div className="relative py-20 lg:py-32 text-white">
            <Image
                src="https://res.cloudinary.com/dyp8op8ov/image/upload/v1771227294/Alight_Ability_December_ztfqyu.png"
                alt="Alight Ability Services Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Services</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                          const image = PlaceHolderImages.find(p => p.id === service.imageId);
                          return (
                            <AnimatedContent key={service.title} distance={50} delay={index * 0.1}>
                                <Card className="flex flex-col text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden rounded-lg">
                                    {image && (
                                        <CardHeader className="p-0">
                                            <div className="aspect-[4/3] relative w-full">
                                                <Image 
                                                    src={image.imageUrl} 
                                                    alt={service.title} 
                                                    fill
                                                    className="object-cover"
                                                    data-ai-hint={image.imageHint}
                                                />
                                            </div>
                                        </CardHeader>
                                    )}
                                    <CardContent className="flex-grow pt-6 flex flex-col">
                                        <CardTitle className="font-headline mb-2 text-2xl">{service.title}</CardTitle>
                                        <p className="text-muted-foreground flex-grow">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </AnimatedContent>
                          );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
