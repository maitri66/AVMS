
    import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { motion } from 'framer-motion';
    import { LogIn, User, Lock } from 'lucide-react';

    const AdminPage = () => {
      const { toast } = useToast();
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = (e) => {
        e.preventDefault();
        // This is a prototype - no actual authentication
        console.log('Admin Login Attempt:', { username, password });
        toast({
          title: "Login Attempted (Prototype)",
          description: `Username: ${username}. This is a mock login, no actual authentication performed.`,
        });
        // Clear fields after mock attempt
        setUsername('');
        setPassword('');
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center min-h-[calc(100vh-10rem)]" // Adjust min-height based on header/footer
        >
          <Card className="w-full max-w-md shadow-xl glassmorphism">
            <CardHeader className="text-center">
              <LogIn className="h-10 w-10 mx-auto text-primary mb-3" />
              <CardTitle className="text-2xl font-bold text-primary">Admin Login</CardTitle>
              <CardDescription>Prototype login panel. No backend validation.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="flex items-center"><User className="mr-2 h-4 w-4 text-primary" />Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter admin username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center"><Lock className="mr-2 h-4 w-4 text-primary" />Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                 <CardFooter className="pt-6 px-0">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Login
                    </Button>
                 </CardFooter>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    export default AdminPage;
  