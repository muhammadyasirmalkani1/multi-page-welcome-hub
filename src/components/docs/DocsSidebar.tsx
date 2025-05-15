
import React from 'react';

const DocsSidebar = () => {
  return (
    <div className="sticky top-24">
      <h2 className="text-xl font-bold mb-4">Documentation</h2>
      <ul className="space-y-2">
        <li>
          <a href="#getting-started" className="text-primary font-medium">Getting Started</a>
        </li>
        <li>
          <a href="#repositories" className="text-white/70 hover:text-white transition-colors">Repositories</a>
        </li>
        <li>
          <a href="#pipelines" className="text-white/70 hover:text-white transition-colors">CI/CD Pipelines</a>
        </li>
        <li>
          <a href="#deployment" className="text-white/70 hover:text-white transition-colors">Deployment</a>
        </li>
        <li>
          <a href="#security" className="text-white/70 hover:text-white transition-colors">Security</a>
        </li>
        <li>
          <a href="#api" className="text-white/70 hover:text-white transition-colors">API Reference</a>
        </li>
      </ul>
      
      <h3 className="text-lg font-bold mt-8 mb-4">Learn</h3>
      <ul className="space-y-2">
        <li>
          <a href="#tutorials" className="text-white/70 hover:text-white transition-colors">Tutorials</a>
        </li>
        <li>
          <a href="#guides" className="text-white/70 hover:text-white transition-colors">Guides</a>
        </li>
        <li>
          <a href="#examples" className="text-white/70 hover:text-white transition-colors">Examples</a>
        </li>
        <li>
          <a href="#references" className="text-white/70 hover:text-white transition-colors">References</a>
        </li>
        <li>
          <a href="#get-started" className="text-white/70 hover:text-white transition-colors">Get Started</a>
        </li>
      </ul>
    </div>
  );
};

export default DocsSidebar;
