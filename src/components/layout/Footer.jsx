import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Coffee, Mountain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Newsletter */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-extrabold text-white">Char Dham</span>
          </Link>
          <p className="text-sm leading-relaxed">Stay updated with our latest pilgrimage tips and exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <Button className="rounded-r-md px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'Register', 'Dashboard', 'Shrines', 'Feedback', 'FAQ', 'About'].map(label => (
              <li key={label}>
                <Link to={`/${label.toLowerCase()}`} className="hover:text-yellow-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {[
              { icon: Twitter, url: 'https://twitter.com' },
              { icon: Github, url: 'https://github.com' },
              { icon: Linkedin, url: 'https://linkedin.com' },
            ].map(({ icon: Icon, url }, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-gray-800"
              >
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                  <Icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-5 w-5 text-gray-400" />
            <a href="mailto:info@chardhamyatra.example.com" className="hover:text-yellow-400 transition-colors">
              info@chardhamyatra.example.com
            </a>
          </div>
        </div>

        {/* Awards & Policies */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Commitment</h4>
          <ul className="space-y-2 text-sm">
            <li>🏆 Rated Top Pilgrimage Service 2024</li>
            <li>🔒 Secure Payments</li>
            <li>
              <Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {currentYear} Char Dham Yatra. All rights reserved.</p>
        <Link
          to="/support"
          className="mt-2 md:mt-0 hover:text-yellow-400 transition-colors flex items-center space-x-1"
        >
          <span>Need Help?</span> <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;