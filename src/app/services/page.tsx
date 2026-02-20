import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedContent from "@/components/ui/animated-content";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    imageId: "service-personal-care",
    title: "Personal Care Services", 
    description: "Our Personal Care services are delivered with respect, dignity, and clinical excellence. We support participants with daily living activities, including showering, dressing, mobility, medication assistance, and high-intensity supports such as PEG feeding, tracheostomy care, and complex bowel management. Our trained staff follow strict clinical protocols to ensure safety and comfort. At Alight Ability, no complexity is too great — we provide care with skill and heart.",
  },
  {
    imageId: "service-high-intensity",
    title: "High Intensity Support",
    description: "If you have high needs don’t worry our highly qualified Nurses are here to save the day! Our RNs and ENs can provide specialist care supports for Bowel Care, Catheter Care, Medication Administration, Trachea Care, Complex Wound Care, PEG Feeding and Subcutaneous Injections.",
  },
  {
    imageId: "service-community-nursing",
    title: "Community Nursing",
    description: "Our qualified nurses provide comprehensive in-home clinical care tailored to individual health needs. Services include continence assessments, wound care, chronic disease management, medication administration, and health monitoring. We work collaboratively with GPs and allied health professionals to ensure holistic care. Your health, safety, and independence remain our highest priority.",
  },
  {
    imageId: "service-domestic-assistance",
    title: "Domestic Care",
    description: "Our domestic care services assist with everyday household tasks such as laundry, meal preparation, tidying, and general household organisation. We aim to reduce stress while supporting independence and routine. Services are tailored to each participant’s preferences and cultural needs. We don’t just clean homes — we support comfortable living.",
  },
  {
    imageId: "service-community-access",
    title: "Community Access, Social and Recreational Activities",
    description: "We support participants to engage in social, cultural, recreational, and community activities that matter to them. Whether attending appointments, events, classes, or social outings, our staff provide reliable and encouraging support. We value inclusion and independence while ensuring safety at all times. Community connection builds confidence — and we’re here to walk beside you.",
  },
  {
    imageId: "service-travel-support",
    title: "Travel/Transport Support",
    description: "Our transport services support participants to attend appointments, community activities, education, and employment. We prioritise punctuality, safety, and comfort in every journey. Staff are trained to provide appropriate assistance during travel when required. Staying connected to the community should never be a barrier — we help you get there with ease.",
  },
  {
    imageId: "service-cleaning-maintenance",
    title: "Cleaning & Other Household Activities",
    description: "We provide professional home maintenance services including regular cleaning, deep cleaning, and specialist forensic cleaning. Our team approaches every home with dignity, discretion, and compassion — particularly for participants experiencing complex life circumstances. We understand that situations can become overwhelming, and we are here to help without stigma. A clean and safe home promotes wellbeing and peace of mind.",
  },
  {
    imageId: "service-short-term-accom",
    title: "Short-term Accommodation",
    description: "Our STA services offer safe and comfortable accommodation for participants needing short-term support or respite. Whether for skill development, carer relief, or a change of environment, we provide structured and supportive stays. Activities are tailored to individual goals and preferences. Every stay is designed to be safe, empowering, and enriching.",
  },
  {
    imageId: "service-independent-living",
    title: "Supported Independent Living",
    description: "Our Supported Independent Living services provide consistent daily support in a shared or individual living environment. We assist with personal care, skill development, household tasks, and community participation. Our approach balances structure with empowerment to help participants grow in confidence and independence. We create safe homes where individuals can thrive.",
  },
  {
    imageId: "service-yard-maintenance",
    title: "House or Yard Maintenance",
    description: "We provide lawn mowing, garden maintenance, pruning, and general yard upkeep to ensure outdoor areas remain safe and usable. A well-maintained garden enhances mental wellbeing and pride in one’s home. Our team works respectfully and efficiently to maintain your outdoor space. We help create environments where participants feel comfortable and secure.",
  },
  {
    imageId: "service-ilo",
    title: "Individualized Living Options",
    description: "Our Individualized Living Options supports help participants explore and establish customised living arrangements that suit their preferences and goals. We work collaboratively to design supports that promote independence while ensuring safety and stability. Options may include host arrangements, co-residency, or tailored in-home supports. We focus on building sustainable, long-term living solutions.",
  },
  {
    imageId: "service-wdo",
    title: "Work and Development Orders (WDO) – New South Wales",
    description: "Alight Ability supports eligible individuals in New South Wales to apply for and participate in a Work and Development Order (WDO) through Revenue NSW. A WDO allows you to reduce certain fines by completing approved activities instead of making payments. We provide respectful, confidential, and structured support throughout the process. Our goal is to ease financial pressure while helping you build stability and independence.",
  },
];


const PageHeader = () => (
    <AnimatedContent distance={50}>
        <div className="relative py-20 lg:py-32 text-white">
            <Image
                src="https://res.cloudinary.com/dyp8op8ov/image/upload//f_auto,q_auto,w_auto/v1771322903/Frame_945_s3h1iq.png"
                alt="Alight Ability Services Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Our Services</h1>
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
