
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DocsHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // In a real app, you would implement search functionality here
    }
  };

  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          <span className="text-primary text-glow">Documentation</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Learn how to use GitFlow to build, test, and deploy your code with our comprehensive documentation.
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/60" />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/5 border border-white/10 w-full pl-10 pr-24 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search documentation..."
          />
          <Button 
            type="submit" 
            className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
            disabled={!searchQuery.trim()}
          >
            Search
          </Button>
        </form>
        
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-white/60">
          <span>Popular searches:</span>
          <a href="#pipelines" className="hover:text-primary transition-colors">Pipelines</a>
          <a href="#deployment" className="hover:text-primary transition-colors">Deployment</a>
          <a href="#repositories" className="hover:text-primary transition-colors">Repositories</a>
          <a href="#security" className="hover:text-primary transition-colors">Security</a>
        </div>
      </div>
    </section>
  );
};

export default DocsHero;
