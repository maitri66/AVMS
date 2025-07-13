
    import React from 'react';
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from '@/components/ui/accordion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { HelpCircle, Phone, Download, MessageCircle } from 'lucide-react';

    const faqData = [
      {
        question: 'How do I register for the Char Dham Yatra?',
        answer: 'You can register online through our portal on the "Register" page. Fill in the required details, select your preferred shrine(s) and date, and submit the form. A confirmation and QR code (mock) will be generated.',
      },
      {
        question: 'What are the opening and closing dates for the Yatra?',
        answer: 'The Char Dham shrines typically open in late April or early May (Akshaya Tritiya) and close around Diwali (October/November). Exact dates vary each year and are announced by the temple committees.',
      },
      {
        question: 'Is medical fitness required?',
        answer: 'Yes, the Yatra involves high altitudes and strenuous trekking, especially for Kedarnath. It is highly recommended to undergo a medical check-up before undertaking the pilgrimage. Registration may require a fitness certificate for certain age groups or routes.',
      },
      {
        question: 'What kind of accommodation is available?',
        answer: 'Various accommodation options are available, ranging from government guesthouses (GMVN/KMVN), private hotels, lodges, and dharamshalas. It is advisable to book in advance, especially during peak season.',
      },
      {
        question: 'What should I pack for the Yatra?',
        answer: 'Pack warm clothing (thermals, sweaters, jackets), comfortable trekking shoes, rain gear (poncho/umbrella), a first-aid kit, essential medicines, sunscreen, sunglasses, a torch, and toiletries. Carry valid ID proof.',
      },
       {
        question: 'Are there ATMs available on the route?',
        answer: 'ATMs are available in major towns like Rishikesh, Haridwar, Uttarkashi, Joshimath, and Guptkashi. However, connectivity can be erratic in higher regions. It is advisable to carry sufficient cash.',
      },
    ];

    const FaqPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">Frequently Asked Questions</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQ Accordion */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg glassmorphism">
                 <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-primary">
                        <HelpCircle className="mr-2 h-5 w-5" /> Common Questions
                    </CardTitle>
                 </CardHeader>
                 <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left hover:no-underline font-medium">
                            {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                            {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                 </CardContent>
              </Card>
            </div>

            {/* Help & Resources */}
            <div className="space-y-8">
              <Card className="shadow-lg glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-primary">
                    <Phone className="mr-2 h-5 w-5" /> Helpline Numbers
                  </CardTitle>
                  <CardDescription>For immediate assistance.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><span className="font-medium">General Inquiry:</span> 1XXX-XXX-XXXX</p>
                  <p><span className="font-medium">Emergency Helpline:</span> 108 / 112</p>
                  <p><span className="font-medium">Disaster Management:</span> 1077</p>
                  <p><span className="font-medium">Tourism Department:</span> +91-XXXXX-XXXXX</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-primary">
                    <Download className="mr-2 h-5 w-5" /> Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3">
                   <Button variant="outline" asChild>
                     <a href="/guides/yatra-help-manual.pdf" download>
                       <Download className="mr-2 h-4 w-4" /> Download Help Manual (PDF)
                     </a>
                   </Button>
                   <p className="text-xs text-muted-foreground text-center">Dummy download link.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg glassmorphism">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-primary">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat Support (Placeholder)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="h-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                     [Embedded Chatbot Area]
                   </div>
                   <p className="text-xs text-muted-foreground mt-2 text-center">A chatbot could be integrated here for automated help.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      );
    };

    export default FaqPage;
  