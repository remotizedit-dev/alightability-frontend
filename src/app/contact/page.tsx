
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedContent from "@/components/ui/animated-content";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const ContactPage = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = values.subject;
    const body = `
New contact message received.

--- Details ---
Name: ${values.name}
Email: ${values.email}

--- Message ---
${values.message}
    `.trim().replace(/^\s+/gm, '');

    const mailtoLink = `mailto:contact@alightability.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Message Ready",
      description: "Your email client has been opened to send your message.",
    });
    form.reset();
  }

  return (
    <>
      <AnimatedContent distance={50}>
          <div className="relative py-20 lg:py-32 text-white">
              <Image
                  src="https://res.cloudinary.com/dyp8op8ov/image/upload/f_auto,q_auto,w_auto/v1771248870/Frame_938_hzubft.png"
                  alt="Contact Us Banner"
                  fill
                  className="object-cover"
                  data-ai-hint="telephone contact"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 container mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Get In Touch</h1>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90">
                      We're here to help. For any questions about our services please reach out.
                  </p>
                  <AnimatedContent distance={50} delay={0.6}>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
  
  <Button
    asChild
    size="lg"
    className="w-full max-w-sm sm:w-64 h-12 flex items-center justify-center"
  >
    <Link href="tel:1300725611" className="flex items-center justify-center w-full">
      <Phone className="mr-2" />
      Call 1300 725 611
    </Link>
  </Button>

  <Button
    asChild
    size="lg"
    className="w-full max-w-sm sm:w-64 h-12 border-white text-white flex items-center justify-center"
  >
    <a
      href="mailto:contact@alightability.com.au"
      className="flex items-center justify-center w-full"
    >
      <Mail className="mr-2" />
      contact@alightability.com.au
    </a>
  </Button>

</div>
</AnimatedContent>
              </div>
          </div>
</AnimatedContent>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedContent distance={50} delay={0.2}>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-headline font-bold mb-6">Send us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Your Name" {...field} />
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
                              <Input placeholder="example@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Regarding your services..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message here..." className="min-h-[150px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg">Send Message</Button>
                  </form>
                </Form>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-headline font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Our Office</h3>
                      <p className="text-muted-foreground">Sydney, NSW 2000 Australia</p>
                      <Button asChild className="mt-1">
                        <a href="https://share.google/XqDBCLEPDt3ESBILf" target="_blank" rel="noopener noreferrer">
                          <MapPin className="mr-2" />
                          View on Map
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                       <Button asChild className="mt-1">
                        <a href="mailto:contact@alightability.com"><Mail className="mr-2"/>contact@alightability.com.au</a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                       <Button asChild className="mt-1">
                        <a href="tel:1300725611"><Phone className="mr-2"/>1300 725 611</a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 10:00 AM - 6:00 PM AEDT</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

    