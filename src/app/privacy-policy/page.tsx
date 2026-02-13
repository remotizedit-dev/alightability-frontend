import AnimatedContent from "@/components/ui/animated-content";

const PageHeader = () => (
    <AnimatedContent distance={50}>
        <div className="bg-secondary py-20 lg:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Privacy Policy</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
                </p>
            </div>
        </div>
    </AnimatedContent>
);

const PrivacyPolicyPage = () => {
    return (
        <div>
            <PageHeader />
            <div className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
                        <AnimatedContent distance={50} delay={0.2}>
                            <h2 className="font-headline text-foreground">1. Introduction</h2>
                            <p>
                                Welcome to Alright Ability. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </AnimatedContent>
                        
                        <AnimatedContent distance={50} delay={0.3}>
                            <h2 className="font-headline text-foreground">2. Collection of Your Information</h2>
                            <p>
                                We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent distance={50} delay={0.4}>
                            <h2 className="font-headline text-foreground">3. Use of Your Information</h2>
                            <p>
                                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, email you regarding your account or order, fulfill and manage purchases, orders, payments, and other transactions related to the Site, and increase the efficiency and operation of the Site.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent distance={50} delay={0.5}>
                            <h2 className="font-headline text-foreground">4. Disclosure of Your Information</h2>
                            <p>
                                We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, if we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent distance={50} delay={0.6}>
                            <h2 className="font-headline text-foreground">5. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </AnimatedContent>
                        
                        <AnimatedContent distance={50} delay={0.7}>
                            <h2 className="font-headline text-foreground">6. Contact Us</h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at:
                                <br />
                                Alright Ability
                                <br />
                                123 Health St, Wellness City, 12345
                                <br />
                                contact@alrightability.com
                            </p>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
