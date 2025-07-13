
    import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { Home, UserPlus, LayoutDashboard, Mountain, MessageSquare, HelpCircle, Info, LogIn, Menu, X } from 'lucide-react';
    import { cn } from '@/lib/utils';

    const navItems = [
      { name: 'Home', path: '/', icon: Home },
      { name: 'Register', path: '/register', icon: UserPlus },
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Shrines', path: '/shrines', icon: Mountain },
      { name: 'Feedback', path: '/feedback', icon: MessageSquare },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'About', path: '/about', icon: Info },
      { name: 'Admin', path: '/admin', icon: LogIn },
    ];

    const Navbar = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const location = useLocation();

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

      return (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
          className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent',
          )}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Brand */}
              <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                 <Mountain className="h-6 w-6" />
                 <span className="font-bold text-xl">Char Dham Yatra</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant={location.pathname === item.path ? 'secondary' : 'ghost'}
                    asChild
                    size="sm"
                    className={cn(
                      "transition-colors",
                      location.pathname === item.path ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-foreground'
                    )}
                  >
                    <Link to={item.path}>
                      <item.icon className="mr-1.5 h-4 w-4" />
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-sm pb-4"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant={location.pathname === item.path ? 'secondary' : 'ghost'}
                    asChild
                    className={cn(
                      "w-full justify-start transition-colors py-3",
                      location.pathname === item.path ? 'text-primary font-semibold' : 'text-foreground/80 hover:text-foreground'
                    )}
                    onClick={toggleMobileMenu} // Close menu on click
                  >
                    <Link to={item.path}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>
      );
    };

    export default Navbar;
  