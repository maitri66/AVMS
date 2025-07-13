
    import React from 'react';
    import Navbar from '@/components/layout/Navbar';
    import Footer from '@/components/layout/Footer';

    const Layout = ({ children }) => {
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16"> {/* Add padding-top to avoid content overlap with sticky navbar */}
            {children}
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;
  