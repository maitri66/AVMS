
    import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
    import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
    import { Progress } from '@/components/ui/progress';
    import { Button } from '@/components/ui/button';
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
    import { motion } from 'framer-motion';
    import { BarChart, CloudSun, AlertTriangle, MapPin, Users, Download, FileText, FileSpreadsheet } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';
    import { cn } from '@/lib/utils';

    const shrineCapacities = [
      { name: 'Yamunotri', current: 75, max: 100 },
      { name: 'Gangotri', current: 60, max: 100 },
      { name: 'Kedarnath', current: 90, max: 100 },
      { name: 'Badrinath', current: 80, max: 100 },
    ];

    const recentRegistrations = [
      { id: 'REG-001', name: 'Amit Sharma', shrine: 'Kedarnath', date: '2025-05-15', status: 'Confirmed' },
      { id: 'REG-002', name: 'Priya Singh', shrine: 'Badrinath', date: '2025-05-18', status: 'Pending' },
      { id: 'REG-003', name: 'Rahul Verma', shrine: 'Gangotri', date: '2025-05-20', status: 'Confirmed' },
      { id: 'REG-004', name: 'Sneha Patil', shrine: 'Yamunotri', date: '2025-05-22', status: 'Confirmed' },
    ];

    const DashboardPage = () => {
      const { toast } = useToast();

      const handleGenerateReport = (reportType) => {
        toast({
          title: "Report Generation Started (Mock)",
          description: `Generating ${reportType} report. This is a placeholder action.`,
        });
      };

      const downloadCSV = (data, filename = 'registrations.csv') => {
        if (!data || data.length === 0) {
          toast({
            variant: "destructive",
            title: "No Data",
            description: "There is no registration data to download.",
          });
          return;
        }

        const headers = Object.keys(data[0]);
        const csvRows = [
          headers.join(','), // Header row
          ...data.map(row =>
            headers.map(fieldName =>
              JSON.stringify(row[fieldName], (key, value) => value === null ? '' : value) // Handle null values and quotes
            ).join(',')
          )
        ];
        const csvString = csvRows.join('\r\n');

        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) { // Feature detection
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', filename);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
           toast({
             title: "Download Started",
             description: `${filename} is being downloaded.`,
           });
        } else {
           toast({
             variant: "destructive",
             title: "Download Failed",
             description: "CSV download is not supported by your browser.",
           });
        }
      };


      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 flex-wrap">
             <h1 className="text-3xl md:text-4xl font-bold text-primary text-center sm:text-left">Live Yatra Dashboard</h1>
             <div className="flex gap-2 flex-wrap justify-center">
                <Button variant="outline" size="sm" onClick={() => handleGenerateReport('Visitor')}>
                    <FileText className="mr-2 h-4 w-4" /> Visitor Report
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleGenerateReport('Capacity')}>
                    <Download className="mr-2 h-4 w-4" /> Capacity Report
                </Button>
                 <Button variant="outline" size="sm" onClick={() => downloadCSV(recentRegistrations)}>
                    <FileSpreadsheet className="mr-2 h-4 w-4" /> Download CSV
                </Button>
             </div>
          </div>


          {/* Alerts Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8"
          >
            <Alert variant="destructive" className="bg-destructive/10 border-destructive/50 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle className="font-semibold">Weather Alert!</AlertTitle>
              <AlertDescription>
                Heavy snowfall expected near Kedarnath route. Pilgrims advised to check conditions before proceeding. (Static Alert)
              </AlertDescription>
            </Alert>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Capacities & Trends */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shrine Capacities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card className="shadow-lg glassmorphism">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-primary">
                      <Users className="mr-2 h-5 w-5" /> Shrine Capacity Status
                    </CardTitle>
                    <CardDescription>Real-time estimated visitor capacity.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {shrineCapacities.map((shrine) => (
                      <div key={shrine.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">{shrine.name}</span>
                          <span className="text-sm font-semibold text-primary">{shrine.current}% Full</span>
                        </div>
                        <Progress value={shrine.current} className="h-3 [&>*]:bg-primary" aria-label={`${shrine.name} capacity ${shrine.current}%`} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Visitor Trends */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Card className="shadow-lg glassmorphism">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-primary">
                      <BarChart className="mr-2 h-5 w-5" /> Visitor Trends (Mock Chart)
                    </CardTitle>
                    <CardDescription>Estimated daily visitor flow.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                      [Chart.js Placeholder - Integration Required]
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">This is a static placeholder. A library like Chart.js would be used to display actual data.</p>
                  </CardContent>
                </Card>
              </motion.div>

               {/* Recent Registrations Table */}
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
               >
                 <Card className="shadow-lg glassmorphism">
                   <CardHeader>
                     <CardTitle className="flex items-center text-xl font-semibold text-primary">
                       <FileText className="mr-2 h-5 w-5" /> Recent Registrations (Mock Data)
                     </CardTitle>
                     <CardDescription>A snapshot of recent yatra registrations.</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <Table>
                       <TableHeader>
                         <TableRow>
                           <TableHead>Reg. ID</TableHead>
                           <TableHead>Name</TableHead>
                           <TableHead>Shrine</TableHead>
                           <TableHead>Date</TableHead>
                           <TableHead>Status</TableHead>
                         </TableRow>
                       </TableHeader>
                       <TableBody>
                         {recentRegistrations.map((reg) => (
                           <TableRow key={reg.id}>
                             <TableCell className="font-medium">{reg.id}</TableCell>
                             <TableCell>{reg.name}</TableCell>
                             <TableCell>{reg.shrine}</TableCell>
                             <TableCell>{reg.date}</TableCell>
                             <TableCell>
                               <span className={cn(
                                 "px-2 py-1 rounded-full text-xs",
                                 reg.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                               )}>
                                 {reg.status}
                               </span>
                             </TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </CardContent>
                 </Card>
               </motion.div>

            </div>

            {/* Right Column: Weather & Map */}
            <div className="space-y-8">
              {/* Weather */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Card className="shadow-lg glassmorphism">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-primary">
                      <CloudSun className="mr-2 h-5 w-5" /> Weather Overview (Static)
                    </CardTitle>
                    <CardDescription>Current conditions at key locations.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Yamunotri:</span>
                      <span className="text-muted-foreground">5°C, Partly Cloudy</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Gangotri:</span>
                      <span className="text-muted-foreground">7°C, Sunny</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Kedarnath:</span>
                      <span className="text-muted-foreground">-2°C, Light Snow</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Badrinath:</span>
                      <span className="text-muted-foreground">3°C, Clear Skies</span>
                    </div>
                     <p className="text-xs text-muted-foreground mt-2 text-center">Static data. Real implementation would use a weather API.</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Card className="shadow-lg glassmorphism overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl font-semibold text-primary">
                      <MapPin className="mr-2 h-5 w-5" /> Shrine Locations Map
                    </CardTitle>
                    <CardDescription>Overview of the Char Dham circuit.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758989.689806044!2d78.00000000000001!3d30.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d470986489f1%3A0x8a1e3f4c6d9f064e!2sChar%20Dham%20Yatra!5e0!3m2!1sen!2sin!4v1678886000000!5m2!1sen!2sin"
                       width="100%"
                       height="300"
                       style={{ border: 0 }}
                       allowFullScreen=""
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Char Dham Locations Map"
                     ></iframe>
                     <p className="text-xs text-muted-foreground mt-2 text-center">Embedded map showing approximate locations.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    };

    export default DashboardPage;
  