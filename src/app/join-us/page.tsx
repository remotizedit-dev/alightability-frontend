"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Briefcase } from "lucide-react";
import AnimatedContent from "@/components/ui/animated-content";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const jobOpenings = [
  {
    title: "Community Worker",
    location: "Sydney Olympic Park NSW",
    type: "Full-time",
    description: "As a Community Worker at Alight Ability, you will be responsible for providing direct support to individuals with disabilities, facilitating their access to community resources, and promoting their overall well-being. You will work collaboratively with clients, their families, and other service providers to create and implement personalized support plans that align with each individual's goals and aspirations.",
  },
  {
    title: "Support Worker",
    location: "Sydney/Canberra/Adelaide",
    type: "Casual",
    description: "Your work as a support worker can include but is not limited to: Social support, transport to and from day programs including extracurricular programs, assisting medications, Drop-in Support, supporting clients with complex needs, personal cares, domestic duties, meal preparation, using aids and equipment and social outings. Basically everything needed to care for our participants. If you have reservations about doing some work but not others then this is not the job for you.",
  },
  {
    title: "Community & NDIS RN/EN",
    location: "Sydney/Canberra/Adelaide",
    type: "Casual",
    description: "We are an upcoming Provider and we are growing rapidly so we constantly need RNs and Ens. We are looking for reliable and experienced Registered and Enrolled Nurse who are empathetic, committed and compassionate with a passion to constantly improve quality. We want team members who will always listen to our participants and value their opinion to promote independence and help them achieve their goals in their own way.Your work as a Nurse can include but is not limited to: Providing Community Nursing care to participants in their homes, Creating or helping with Nursing/High needs Assessments, Wound Care, Centre based care for high needs participants, personal care, Bowel care, Tracheostomy care, Catheter Care and helping to create detailed care plans or incontinence support plans.",
  },
  
];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  postcode: z.string().min(4, { message: "Please enter a valid post code." }),
  position: z.string({ required_error: "Please select a position." }),
  firstAid: z.enum(["Yes", "No"], { required_error: "Please select an option." }),
  policeCheck: z.enum(["Yes", "No"], { required_error: "Please select an option." }),
  ndisCheck: z.enum(["Yes", "No"], { required_error: "Please select an option." }),
  drivingLicense: z.enum(["Yes", "No"], { required_error: "Please select an option." }),
  ownCar: z.enum(["Yes", "No"], { required_error: "Please select an option." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const joinUsBannerImage = PlaceHolderImages.find(p => p.id === 'join-us-banner');

const PageHeader = () => (
    <AnimatedContent distance={50}>
      {joinUsBannerImage && (
        <div className="relative py-20 lg:py-32 text-white">
            <Image
                src={joinUsBannerImage.imageUrl}
                alt={joinUsBannerImage.description}
                fill
                className="object-cover"
                data-ai-hint={joinUsBannerImage.imageHint}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Join Our Team</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
                Become a part of a dedicated team of professionals committed to making a difference in healthcare. Explore our open positions and apply below.
                </p>
            </div>
        </div>
      )}
    </AnimatedContent>
);

const JoinUsPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      postcode: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = `Job Application: ${values.position}`;
    const body = `
New job application received.

--- Details ---
Full Name: ${values.fullName}
Email: ${values.email}
Phone No: ${values.phone}
Post Code: ${values.postcode}
Position Applied For: ${values.position}

--- Questionnaire ---
First Aid Certificate: ${values.firstAid}
National Police Check or Criminal Record Check: ${values.policeCheck}
NDIS Worker Screening Check: ${values.ndisCheck}
Driving License: ${values.drivingLicense}
Owns a Car: ${values.ownCar}

--- Message ---
${values.message}
    `.trim().replace(/^\s+/gm, '');

    const mailtoLink = `mailto:contact@alightability.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Application Ready",
      description: "Your email client has been opened to send your application.",
    });

    form.reset();
  }

  return (
    <div>
        <PageHeader />
        <div className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedContent distance={50} delay={0.2}>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Current Openings</h2>
                        <div className="space-y-8">
                            {jobOpenings.map((job, index) => (
                                <AnimatedContent key={job.title} distance={50} delay={index * 0.1}>
                                    <Card key={job.title} className="transition-shadow hover:shadow-lg">
                                        <CardHeader>
                                            <CardTitle className="font-headline text-2xl">{job.title}</CardTitle>
                                            <div className="flex items-center gap-6 text-muted-foreground pt-2">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{job.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="h-4 w-4" />
                                                    <span>{job.type}</span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{job.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button onClick={() => {
                                                form.setValue('position', job.title, { shouldValidate: true });
                                                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                                            }}>Apply for this role</Button>
                                        </CardFooter>
                                    </Card>
                                </AnimatedContent>
                            ))}
                        </div>
                    </AnimatedContent>

                    <AnimatedContent distance={50} delay={0.4}>
                        <div id="apply-form" className="mt-24">
                            <Card className="shadow-xl">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl">Apply Now</CardTitle>
                                    <CardDescription>Fill out the form below to apply for a position.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="fullName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Full Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter your name" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Email Address</FormLabel>
                                                            <FormControl>
                                                                <Input type="email" placeholder="Enter your email address" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Phone No</FormLabel>
                                                            <FormControl>
                                                                <Input type="tel" placeholder="e.g. 0412 345 678" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="postcode"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Post Code</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="e.g. 2000" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="position"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Position</FormLabel>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select a position to apply for" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {jobOpenings.map(job => (
                                                                    <SelectItem key={job.title} value={job.title}>{job.title}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            
                                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                                <FormField
                                                    control={form.control}
                                                    name="firstAid"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Do you have a current First Aid Certificate?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 pt-2">
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="Yes" id="firstAid-yes" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="firstAid-yes" className="font-normal">Yes</FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="No" id="firstAid-no" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="firstAid-no" className="font-normal">No</FormLabel>
                                                                    </FormItem>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="policeCheck"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Do you have a National Police Check or Criminal Record Check?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 pt-2">
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="Yes" id="policeCheck-yes" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="policeCheck-yes" className="font-normal">Yes</FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="No" id="policeCheck-no" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="policeCheck-no" className="font-normal">No</FormLabel>
                                                                    </FormItem>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="ndisCheck"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Do you have an NDIS Worker Screening Check?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 pt-2">
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="Yes" id="ndisCheck-yes" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="ndisCheck-yes" className="font-normal">Yes</FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="No" id="ndisCheck-no" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="ndisCheck-no" className="font-normal">No</FormLabel>
                                                                    </FormItem>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="drivingLicense"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Do you have a driving license?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 pt-2">
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="Yes" id="drivingLicense-yes" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="drivingLicense-yes" className="font-normal">Yes</FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="No" id="drivingLicense-no" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="drivingLicense-no" className="font-normal">No</FormLabel>
                                                                    </FormItem>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="ownCar"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Do you own a car?</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4 pt-2">
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="Yes" id="ownCar-yes" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="ownCar-yes" className="font-normal">Yes</FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-x-2 space-y-0">
                                                                        <FormControl>
                                                                            <RadioGroupItem value="No" id="ownCar-no" />
                                                                        </FormControl>
                                                                        <FormLabel htmlFor="ownCar-no" className="font-normal">No</FormLabel>
                                                                    </FormItem>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Message</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us a little bit about yourself and why you're a good fit."
                                                                className="min-h-[120px]"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button type="submit" size="lg">Submit Application</Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </div>
                    </AnimatedContent>
                </div>
            </div>
        </div>
    </div>
  );
};

export default JoinUsPage;
