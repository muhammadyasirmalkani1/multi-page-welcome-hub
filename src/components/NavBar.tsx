
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary mr-8">
            GitFlow
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-sm text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/docs" className="text-sm text-white/80 hover:text-white transition-colors">
              Documentation
            </Link>
            <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hidden md:inline-block text-sm text-white/80 hover:text-white transition-colors">
            Log in
          </Link>
          <Link to="/docs#get-started">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
