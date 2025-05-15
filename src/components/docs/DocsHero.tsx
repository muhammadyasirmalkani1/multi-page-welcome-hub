
import React from 'react';
import { Search } from 'lucide-react';

const DocsHero = () => {
  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          <span className="text-primary text-glow">Documentation</span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Learn how to use GitFlow to build, test, and deploy your code.
        </p>
        <div className="max-w-xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/60" />
          </div>
          <input
            type="search"
            className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search documentation..."
          />
        </div>
      </div>
    </section>
  );
};

export default DocsHero;
