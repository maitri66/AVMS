
    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { ArrowRight, Users, CalendarCheck, Mountain, Info } from 'lucide-react'; // Added Info here
    
    import StatisticsSection from '../components/StatsCard';
const shrineData = [
      { name: 'Yamunotri', icon: Mountain, description: 'Source of the Yamuna River.' },
      { name: 'Gangotri', icon: Mountain, description: 'Source of the Ganges River.' },
      { name: 'Kedarnath', icon: Mountain, description: 'Dedicated to Lord Shiva.' },
      { name: 'Badrinath', icon: Mountain, description: 'Dedicated to Lord Vishnu.' },
    ];

    const HomePage = () => {
      const [visitorCount, setVisitorCount] = useState(0);
      const [registrations, setRegistrations] = useState(0);

      // Dummy counter effect
      useEffect(() => {
        const targetVisitors = 125340; // Example target number
        const targetRegistrations = 85720; // Example target number
        let currentVisitors = 0;
        let currentRegistrations = 0;

        const interval = setInterval(() => {
          let updated = false;
          if (currentVisitors < targetVisitors) {
            currentVisitors += Math.ceil(targetVisitors / 200); // Increment speed
            if (currentVisitors > targetVisitors) currentVisitors = targetVisitors;
            setVisitorCount(currentVisitors);
            updated = true;
          }
          if (currentRegistrations < targetRegistrations) {
            currentRegistrations += Math.ceil(targetRegistrations / 200); // Increment speed
            if (currentRegistrations > targetRegistrations) currentRegistrations = targetRegistrations;
            setRegistrations(currentRegistrations);
            updated = true;
          }
          if (!updated) {
            clearInterval(interval);
          }
        }, 10); // Update interval

        return () => clearInterval(interval);
      }, []);

      return (
        <div className="flex flex-col items-center">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover object-center"
                alt="Panoramic view of Char Dham mountains"
               src="https://images.unsplash.com/photo-1663839550698-57bd772dd814" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Hero Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
              className="relative z-10 px-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                Embark on Your Sacred Journey
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                Register for the Char Dham Yatra and experience the divine pilgrimage through the Himalayas.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Link to="/register">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.section>

          {/* Shrines Overview Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">The Four Holy Abodes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {shrineData.map((shrine, index) => (
                <motion.div
                  key={shrine.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300 glassmorphism">
                    <CardHeader>
                      <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-3">
                        <shrine.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{shrine.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{shrine.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button variant="outline" asChild>
                    <Link to="/shrines">
                        Learn More About Shrines <Info className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </section>

          {/* Visitor Stats Section */}
          {/* Visitor Stats Section */}
<StatisticsSection
visitorCount={visitorCount}
registrations={registrations}
/>
          {/* Call to Action Section */}
           <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Pilgrimage?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Secure your spot for the Char Dham Yatra. The registration process is simple and quick.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <Link to="/register">
                    Register Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
             </motion.div>
           </section>
        </div>
      );
    };

    export default HomePage;
  