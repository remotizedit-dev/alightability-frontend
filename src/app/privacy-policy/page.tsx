import AnimatedContent from "@/components/ui/animated-content";

const PageHeader = () => (
    <AnimatedContent distance={50}>
        <div className="bg-secondary py-20 lg:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-headline font-bold italic">Privacy Policy</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Alight Health Services Pty Ltd ensures private access and services to support participants to uphold and protect their rights to user privacy. The policy is regulated throughout all our Staff, Management and Support Workers.
            
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
                            <h2 className="font-headline text-foreground">POLICY</h2>
                            <p>
                                ALIGHT HEALTH SERVICES PTY LTD Is Always Committed to protect the right to privacy for stakeholders, management, representatives, support workers and agencies we deal with.
                                ALIGHT HEALTH SERVICES PTY LTD Is also committed in protecting the right to privacy as we collect, store and organize information about participants.
                                ALIGHT HEALTH SERVICES PTY LTD is committed in following the Guidelines of Australian Privacy Principles and Practices.
                                ALIGHT HEALTH SERVICES PTY LTD will ensure all personal information taken, recorded and collected in any form or material will be informed to the participants.
                                ALIGHT HEALTH SERVICES PTY LTD is committed to protect the privacy of organizational personnel and participants with legal and ethical obligations as an employer and service provider.
                                ALIGHT HEALTH SERVICES PTY LTD participants, support worker, staff, management needs to meet these obligations.
                                This policy confirms to the Federal Privacy Act (1998) and the Australian Privacy Principles, which govern the collection, use and storage of personal information.
                                This policy will apply to all records, weather hard copy or electronic, containing personal information about individuals, and to interviews or discussion of a sensitive personal nature.
                            </p>
                        </AnimatedContent>
                        
                        <AnimatedContent distance={50} delay={0.3}>
                            <h2 className="font-headline text-foreground">2. Personal Information Policy</h2>
                            <p>
                            In accordance with dealing personal information All ALIGHT HEALTH SERVICES PTY LTD staff will
                                
                                1. Use fair and lawful ways to collect personal information
                                2. Collect and record personal information that is necessary for ALIGHT HEALTH SERVICES PTY LTD to function its services.
                                3. Always take consent from the individual in collection of personal information.
                                4. Notify people about who, why and what personal information would be held, stored and be accessed.
                                5. Protect all personal Information held for organizations functioning.
                                6. Destroy all information that will be of no use or expired.
                                7. Ensures that participants agree and understands why the information being held and collected for.
                                8. Ensures that participants involve in any visual or audio recording must be agreed to in writing.                            </p>
                        </AnimatedContent>

                        <AnimatedContent distance={50} delay={0.4}>
                            <h2 className="font-headline text-foreground">3. Participants Record Policy</h2>
                            <p>
                            ALIGHT HEALTH SERVICES PTY LTD will ensure that the participant records will be kept safe and confidential and only be handled by the staff engaged in providing the service to the participant. The information will only be made available to other parties with the consent of the participant, or their advocate, legal guardian or representative.                            </p>
                        </AnimatedContent>

                        <AnimatedContent distance={50} delay={0.5}>
                            <h2 className="font-headline text-foreground">4. Management Privacy Policy</h2>
                            <p>
                                ALIGHT HEALTH SERVICES PTY LTD are responsible for managing the personal information which staff has access to. The organization is responsible for the content in ALIGHT HEALTH SERVICES PTY LTD publications, Communications and information provided in the website. This extends to every advertising in any form to ensure that the website holds a privacy policy against any personal information being collected through any of these channels. ALIGHT HEALTH SERVICES PTY LTD also ensures that all the staff members, participants and management are familiar with all the privacy policy regarding the use of personal information. 
                                ALIGHT HEALTH SERVICES PTY LTD will not disclose any personal information to a third party without the individuals consent unless the discloser is required or authorized by or under law.                            </p>
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
                                Alight Ability
                                <br />
                                Phone: 1300 725 611
                                <br />
                                Email: contact@alightability.com.au
                            </p>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
