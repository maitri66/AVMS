
    import React from 'react';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { motion } from 'framer-motion';
    import { Mountain, Clock, Route, PhoneCall, Download, Info } from 'lucide-react';

    const shrineDetails = {
      yamunotri: {
        name: 'Yamunotri',
        imageAlt: 'Yamunotri Temple nestled in mountains',
        imagePlaceholder: 'Yamunotri Temple with snow peaks behind',
        description: 'The source of the Yamuna River and the seat of the Goddess Yamuna in Hinduism. It is situated in the western region of Garhwal Himalayas at an altitude of 3,291 metres.',
        routes: 'Accessible via Hanuman Chatti, followed by a trek or pony ride. Road connectivity up to Janki Chatti.',
        timings: 'Temple opens around 6:00 AM and closes around 8:00 PM. Aarti timings vary.',
        capacity: 'Moderate capacity, queues expected during peak season.',
        contacts: ['Police: 100', 'Medical Helpline: 108', 'Disaster Management: 1077'],
        guideLink: '/guides/yamunotri-guide.pdf', // Dummy link
      },
      gangotri: {
        name: 'Gangotri',
        imageAlt: 'Gangotri Temple beside the Bhagirathi River',
        imagePlaceholder: 'White Gangotri Temple structure near a flowing river',
        description: 'The origin of the River Ganges and seat of the goddess Ganga. Located in Uttarkashi district, it stands at an altitude of 3,100 metres.',
        routes: 'Well-connected by road. Accessible directly by vehicles.',
        timings: 'Typically opens 6:15 AM - 2:00 PM and 3:00 PM - 9:30 PM. Subject to change.',
        capacity: 'High capacity, well-managed facilities.',
        contacts: ['Police: 100', 'Medical Helpline: 108', 'Local Administration: +91-XXXXX-XXXXX'],
        guideLink: '/guides/gangotri-guide.pdf', // Dummy link
      },
      kedarnath: {
        name: 'Kedarnath',
        imageAlt: 'Kedarnath Temple with Himalayan backdrop',
        imagePlaceholder: 'Stone Kedarnath Temple with majestic snowy mountains',
        description: 'One of the holiest pilgrimages for Hindus, dedicated to Lord Shiva. Located in the Rudraprayag district at an altitude of 3,583 metres, near the Mandakini river.',
        routes: 'Requires a trek of about 16-18 km from Gaurikund. Helicopter services are also available.',
        timings: 'Temple timings are generally 4:00 AM to 9:00 PM, with closures in the afternoon.',
        capacity: 'Managed capacity due to terrain. Pre-registration often mandatory.',
        contacts: ['Police: 100', 'Medical Helpline: 108', 'Trekking Assistance: +91-YYYYY-YYYYY'],
        guideLink: '/guides/kedarnath-guide.pdf', // Dummy link
      },
      badrinath: {
        name: 'Badrinath',
        imageAlt: 'Colorful Badrinath Temple facade',
        imagePlaceholder: 'Brightly painted Badrinath Temple entrance',
        description: 'Dedicated to Lord Vishnu, located in the Chamoli district along the banks of the Alaknanda River. It sits at an altitude of 3,300 metres.',
        routes: 'Accessible by road. Located in the town of Badrinath.',
        timings: 'Opens early morning (around 4:30 AM) and closes late evening (around 9:00 PM), with afternoon closure.',
        capacity: 'Very high capacity, large temple complex.',
        contacts: ['Police: 100', 'Medical Helpline: 108', 'Temple Information: +91-ZZZZZ-ZZZZZ'],
        guideLink: '/guides/badrinath-guide.pdf', // Dummy link
      },
    };

    const ShrinesPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">Shrine Information</h1>

          <Tabs defaultValue="yamunotri" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-primary/10">
              {Object.keys(shrineDetails).map((key) => (
                <TabsTrigger key={key} value={key} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md py-2.5">
                  <Mountain className="mr-2 h-4 w-4 inline-block" /> {shrineDetails[key].name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(shrineDetails).map(([key, shrine]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="overflow-hidden shadow-lg glassmorphism">
                    <CardHeader className="p-0">
                       <div className="relative h-64 md:h-80 w-full">
                         <img 
                           className="w-full h-full object-cover"
                           alt={shrine.imageAlt}
                          src="https://images.unsplash.com/photo-1645978230059-48f6a699f61e" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
                            <CardTitle className="text-3xl font-bold text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>{shrine.name}</CardTitle>
                         </div>
                       </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{shrine.description}</p>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Route className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground">Routes & Accessibility</h4>
                            <p className="text-sm text-muted-foreground">{shrine.routes}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground">Timings</h4>
                            <p className="text-sm text-muted-foreground">{shrine.timings}</p>
                          </div>
                        </div>
                         <div className="flex items-start">
                          <Info className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground">Capacity Info</h4>
                            <p className="text-sm text-muted-foreground">{shrine.capacity}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <PhoneCall className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground">Emergency Contacts</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {shrine.contacts.map((contact, index) => (
                                <li key={index}>{contact}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 p-6">
                      <Button variant="outline" asChild>
                        {/* In a real app, this would trigger a file download */}
                        <a href={shrine.guideLink} download={`${key}-guide.pdf`}>
                          <Download className="mr-2 h-4 w-4" /> Download PDF Guide (Dummy)
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      );
    };

    export default ShrinesPage;
  