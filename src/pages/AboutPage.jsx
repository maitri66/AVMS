
    import React from 'react';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { motion } from 'framer-motion';
    import { Users, User, Building, Target, Mail, Send, MapPin } from 'lucide-react';

    const teamMembers = [
      { name: 'Aryan Chadha', initials: 'AC', role: 'Developer' },
      { name: 'Paridhi Harit', initials: 'PH', role: 'Developer' },
      { name: 'Maitri', initials: 'M', role: 'Developer' },
      { name: 'Ridhi Gupta', initials: 'RG', role: 'Developer' },
    ];

    const mentor = { name: 'Mr. Jatin Gaur', initials: 'JG', role: 'Mentor' };

    const AboutPage = () => {
      const { toast } = useToast();

      const handleContactSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Contact Form Submitted (Mock):', { name, email, message });
        toast({
          title: "Message Sent (Mock)",
          description: "Thank you for contacting us! We'll get back to you shortly.",
        });
        e.target.reset(); // Clear form
      };


      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16"
        >
          {/* Project Vision */}
          <section className="text-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
             >
                <Target className="h-12 w-12 mx-auto text-primary mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Vision</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  To create a seamless, informative, and safe digital platform for pilgrims undertaking the sacred Char Dham Yatra, enhancing their spiritual journey through technology.
                </p>
             </motion.div>
          </section>

          {/* Team & Mentor Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">Meet the Team & Mentor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Team Members */}
              <Card className="shadow-lg glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Users className="mr-2 h-5 w-5 text-primary" /> The Team
                  </CardTitle>
                  <CardDescription>The developers behind this project.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Avatar>
                        {/* Add AvatarImage if URLs are available */}
                        {/* <AvatarImage src="https://github.com/shadcn.png" alt={member.name} /> */}
                        <AvatarFallback className="bg-primary/20 text-primary font-semibold">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Mentor */}
              <Card className="shadow-lg glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <User className="mr-2 h-5 w-5 text-primary" /> Our Mentor
                  </CardTitle>
                  <CardDescription>Guidance and support.</CardDescription>
                </CardHeader>
                <CardContent>
                   <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <Avatar>
                        <AvatarFallback className="bg-secondary text-secondary-foreground font-semibold">{mentor.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{mentor.name}</p>
                        <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      </div>
                    </motion.div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Institution Section */}
          <section>
             <Card className="shadow-lg glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold">
                    <Building className="mr-2 h-5 w-5 text-primary" /> Institution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-medium">Bharati Vidyapeeth's College of Engineering (BVCOE)</p>
                    <p className="text-sm text-muted-foreground">New Delhi, Paschim Vihar</p>
                </CardContent>
             </Card>
          </section>

          {/* Contact & Location Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <Card className="shadow-lg glassmorphism">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <Mail className="mr-2 h-5 w-5 text-primary" /> Contact Us (Mock)
                </CardTitle>
                <CardDescription>Send us a message.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." rows={4} required />
                  </div>
                  <CardFooter className="px-0 pt-4">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-lg glassmorphism overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                  <MapPin className="mr-2 h-5 w-5 text-primary" /> Our Location (BVCOE)
                </CardTitle>
                <CardDescription>Bharati Vidyapeeth's College of Engineering, New Delhi.</CardDescription>
              </CardHeader>
              <CardContent>
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.579998161101!2d77.0901858150834!3d28.67232998240181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03b68b7a8e7b%3A0x407f7e5e4b3a6b1!2sBharati%20Vidyapeeth&#39;s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1678888000000!5m2!1sen!2sin" // Replace with actual BVCOE embed URL if needed
                   width="100%"
                   height="350"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="BVCOE Location Map"
                 ></iframe>
              </CardContent>
            </Card>
          </section>
        </motion.div>
      );
    };

    export default AboutPage;
  