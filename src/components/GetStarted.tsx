
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface GetStartedProps {
  className?: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ className }) => {
  const { toast } = useToast();
  
  const handleGetStarted = () => {
    toast({
      title: "Getting started!",
      description: "Thank you for your interest. Setting up your first project...",
    });
  };

  return (
    <section id="get-started" className={`py-16 bg-gradient-to-br from-background to-background/80 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Building with <span className="text-primary">GitFlow</span>
          </h2>
          
          <div className="bg-card rounded-lg border border-white/10 p-6 md:p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Three Simple Steps</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/20 text-primary h-10 w-10 rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h4 className="font-medium text-white">Create a GitFlow account</h4>
                  <p className="text-white/70">Sign up for free and get access to all GitFlow features.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/20 text-primary h-10 w-10 rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h4 className="font-medium text-white">Connect your repository</h4>
                  <p className="text-white/70">Link your GitHub, GitLab, or Bitbucket repository to GitFlow.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-primary/20 text-primary h-10 w-10 rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h4 className="font-medium text-white">Configure your pipeline</h4>
                  <p className="text-white/70">Set up your CI/CD pipeline using our easy-to-use interface.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2" 
              size="lg"
              onClick={handleGetStarted}
            >
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5"
              size="lg"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
