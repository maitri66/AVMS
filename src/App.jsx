
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Layout from '@/components/layout/Layout';
    import HomePage from '@/pages/HomePage';
    import RegisterPage from '@/pages/RegisterPage';
    import DashboardPage from '@/pages/DashboardPage';
    import ShrinesPage from '@/pages/ShrinesPage';
    import FeedbackPage from '@/pages/FeedbackPage';
    import FaqPage from '@/pages/FaqPage';
    import AboutPage from '@/pages/AboutPage';
    import AdminPage from '@/pages/AdminPage';
    import { Toaster } from '@/components/ui/toaster';
    import { TooltipProvider } from '@/components/ui/tooltip';

    function App() {
      return (
        <TooltipProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/shrines" element={<ShrinesPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/admin" element={<AdminPage />} />
              </Routes>
            </Layout>
            <Toaster />
          </Router>
        </TooltipProvider>
      );
    }

    export default App;
  