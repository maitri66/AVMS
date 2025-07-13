import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Users, CalendarCheck } from 'lucide-react';

const StatSimpleCard = ({ icon: Icon, title, value, description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <Card className="flex flex-col items-center p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="p-4 bg-white/30 rounded-full mb-4">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-5xl font-extrabold text-primary mb-2">{value.toLocaleString()}</h3>
        <p className="text-lg font-medium text-primary/80 mb-4">{title}</p>
        <p className="text-center text-sm text-foreground/70 max-w-xs">{description}</p>
      </Card>
    </motion.div>
  );
};

export default function StatisticsSection({ visitorCount, registrations }) {
  return (
    <section className="w-full py-20 bg-gradient-to-t from-background to-primary/5">  
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Pilgrimage Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <StatSimpleCard
            icon={Users}
            title="Total Visitors"
            value={visitorCount}
            description="The number of devotees on this season's yatra, experiencing the spiritual journey."
          />
          <StatSimpleCard
            icon={CalendarCheck}
            title="Registrations"
            value={registrations}
            description="Total successful registrations completed for the Char Dham pilgrimage this season."
          />
        </div>
      </div>
    </section>
  );
}