import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";

const jobOpenings = [
  {
    title: "Registered Nurse (RN)",
    location: "Wellness City",
    type: "Full-time",
    description: "Provide and coordinate patient care, educate patients about health conditions, and provide advice and emotional support to patients' family members.",
  },
  {
    title: "Medical Assistant",
    location: "Wellness City",
    type: "Full-time",
    description: "Perform administrative and certain clinical duties under the direction of a physician. Administrative duties may include scheduling appointments, maintaining medical records, and billing.",
  },
  {
    title: "Clinical Research Coordinator",
    location: "Remote",
    type: "Contract",
    description: "Manage clinical trials and studies. You will be responsible for recruiting participants, managing data, and ensuring compliance with regulatory requirements.",
  },
  {
    title: "Physical Therapist",
    location: "Wellness City",
    type: "Part-time",
    description: "Help injured or ill people improve their movement and manage their pain. Therapists are often an important part of rehabilitation and treatment.",
  },
];

const PageHeader = () => (
    <div className="bg-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Join Our Team</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Become a part of a dedicated team of professionals committed to making a difference in healthcare. Explore our open positions.
        </p>
      </div>
    </div>
);

const JoinUsPage = () => {
  return (
    <div>
        <PageHeader />
        <div className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="space-y-8 max-w-4xl mx-auto">
                    {jobOpenings.map((job) => (
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
                                <Button>Apply Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default JoinUsPage;
