
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileQuestion, BookOpen, Coffee } from 'lucide-react';

const HelpSection = () => {
  return (
    <div className="mt-12 p-6 rounded-lg border border-white/10 bg-card">
      <h3 className="text-xl font-bold mb-4">Need more help?</h3>
      <p className="text-white/70 mb-6">Get assistance through our various support channels or check out our additional resources.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <MessageCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Join Community Forum</h4>
            <p className="text-white/70 mb-3">Connect with other developers and GitFlow experts to get help and share knowledge.</p>
            <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
              Community Forum
            </Button>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <FileQuestion className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Support Team</h4>
            <p className="text-white/70 mb-3">Get direct assistance from our dedicated support team for technical issues.</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Contact Support
            </Button>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Read Advanced Guides</h4>
            <p className="text-white/70 mb-3">Explore our advanced documentation for in-depth tutorials and guides.</p>
            <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
              Browse Guides
            </Button>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-secondary/20 p-3 rounded-lg">
            <Coffee className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Book a Consultation</h4>
            <p className="text-white/70 mb-3">Schedule a one-on-one consultation with a GitFlow expert to solve complex problems.</p>
            <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
