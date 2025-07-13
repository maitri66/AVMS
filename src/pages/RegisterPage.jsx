
    import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Checkbox } from '@/components/ui/checkbox';
    import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
    import { Calendar } from '@/components/ui/calendar';
    import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { motion } from 'framer-motion';
    import { Calendar as CalendarIcon, QrCode, User, Mail, Phone, Hash, MapPin, Users, CalendarDays } from 'lucide-react';
    import { format } from 'date-fns';
    import { cn } from '@/lib/utils';

    const shrines = [
      { id: 'yamunotri', label: 'Yamunotri' },
      { id: 'gangotri', label: 'Gangotri' },
      { id: 'kedarnath', label: 'Kedarnath' },
      { id: 'badrinath', label: 'Badrinath' },
    ];

    const categories = [
      { id: 'pilgrim', label: 'Pilgrim' },
      { id: 'tourist', label: 'Tourist' },
      { id: 'special_assistance', label: 'Requires Special Assistance' },
    ];

    const RegisterPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        phone: '',
        aadhar: '',
        selectedShrines: [],
        category: '',
        date: null,
      });
      const [showQrCode, setShowQrCode] = useState(false);

      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
      };

      const handleCheckboxChange = (shrineId) => {
        setFormData((prev) => {
          const selectedShrines = prev.selectedShrines.includes(shrineId)
            ? prev.selectedShrines.filter((id) => id !== shrineId)
            : [...prev.selectedShrines, shrineId];
          return { ...prev, selectedShrines };
        });
      };

      const handleRadioChange = (value) => {
        setFormData((prev) => ({ ...prev, category: value }));
      };

      const handleDateChange = (date) => {
        setFormData((prev) => ({ ...prev, date }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation example
        if (!formData.name || !formData.email || !formData.aadhar || !formData.date || formData.selectedShrines.length === 0 || !formData.category) {
           toast({
             variant: "destructive",
             title: "Incomplete Form",
             description: "Please fill in all required fields.",
           });
           return;
        }
        console.log('Form Data Submitted:', formData);
        toast({
          title: "Registration Submitted!",
          description: "Your registration details have been recorded (mock submission).",
        });
        setShowQrCode(true); // Show QR code placeholder on successful mock submission
        // Reset form or redirect if needed
        // setFormData({ name: '', age: '', gender: '', email: '', phone: '', aadhar: '', selectedShrines: [], category: '', date: null });
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <Card className="max-w-3xl mx-auto shadow-lg glassmorphism">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">Yatra Registration</CardTitle>
              <CardDescription>Fill in your details to register for the pilgrimage.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="flex items-center mb-1"><User className="mr-2 h-4 w-4 text-primary" />Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="age" className="flex items-center mb-1"><Users className="mr-2 h-4 w-4 text-primary" />Age</Label>
                    <Input id="age" type="number" placeholder="Enter your age" value={formData.age} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="gender" className="flex items-center mb-1"><Users className="mr-2 h-4 w-4 text-primary" />Gender</Label>
                    <Input id="gender" placeholder="e.g., Male, Female, Other" value={formData.gender} onChange={handleInputChange} />
                  </div>
                   <div>
                    <Label htmlFor="email" className="flex items-center mb-1"><Mail className="mr-2 h-4 w-4 text-primary" />Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-1"><Phone className="mr-2 h-4 w-4 text-primary" />Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="aadhar" className="flex items-center mb-1"><Hash className="mr-2 h-4 w-4 text-primary" />Aadhar Number</Label>
                    <Input id="aadhar" type="text" placeholder="XXXX XXXX XXXX" value={formData.aadhar} onChange={handleInputChange} required pattern="\d{4}\s?\d{4}\s?\d{4}" title="Enter a valid 12-digit Aadhar number"/>
                  </div>
                </div>

                {/* Shrine Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center mb-2"><MapPin className="mr-2 h-4 w-4 text-primary" />Select Shrine(s)</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {shrines.map((shrine) => (
                      <div key={shrine.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={shrine.id}
                          checked={formData.selectedShrines.includes(shrine.id)}
                          onCheckedChange={() => handleCheckboxChange(shrine.id)}
                        />
                        <Label htmlFor={shrine.id} className="font-normal cursor-pointer">{shrine.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center mb-2"><Users className="mr-2 h-4 w-4 text-primary" />Select Category</Label>
                  <RadioGroup
                    value={formData.category}
                    onValueChange={handleRadioChange}
                    className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0"
                    required
                  >
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={category.id} id={category.id} />
                        <Label htmlFor={category.id} className="font-normal cursor-pointer">{category.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                   <Label htmlFor="date" className="flex items-center mb-1"><CalendarDays className="mr-2 h-4 w-4 text-primary" />Preferred Date of Visit</Label>
                   <Popover>
                     <PopoverTrigger asChild>
                       <Button
                         variant={"outline"}
                         className={cn(
                           "w-full justify-start text-left font-normal",
                           !formData.date && "text-muted-foreground"
                         )}
                       >
                         <CalendarIcon className="mr-2 h-4 w-4" />
                         {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                       </Button>
                     </PopoverTrigger>
                     <PopoverContent className="w-auto p-0">
                       <Calendar
                         mode="single"
                         selected={formData.date}
                         onSelect={handleDateChange}
                         initialFocus
                         // Optional: Add disabled dates if needed
                         // disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                       />
                     </PopoverContent>
                   </Popover>
                </div>

                {/* QR Code Placeholder */}
                {showQrCode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-4 border border-dashed border-primary rounded-lg text-center bg-primary/5"
                  >
                    <QrCode className="h-16 w-16 mx-auto text-primary mb-3" />
                    <p className="font-semibold text-primary">Your Registration QR Code</p>
                    <p className="text-sm text-muted-foreground">
                      This is a placeholder. In a real application, a unique QR code would be generated here.
                    </p>
                    <div className="mt-3 w-32 h-32 bg-muted mx-auto flex items-center justify-center text-muted-foreground text-xs">
                      [QR Code Area]
                    </div>
                  </motion.div>
                )}

                <CardFooter className="pt-6">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Submit Registration
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default RegisterPage;
  