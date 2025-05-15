
import React from 'react';
import { Button } from '@/components/ui/button';

const HelpSection = () => {
  return (
    <div className="mt-12 p-6 rounded-lg border border-white/10 bg-card">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Need more help?</h3>
          <p className="text-white/70">Join our community forum or contact our support team.</p>
        </div>
        <div className="flex space-x-4">
          <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
            Community Forum
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
