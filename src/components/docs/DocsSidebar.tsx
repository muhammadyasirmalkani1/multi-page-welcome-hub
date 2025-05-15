
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

type SidebarSection = {
  title: string;
  id: string;
  isActive?: boolean;
  items?: {
    title: string;
    id: string;
    isActive?: boolean;
  }[];
};

const DocsSidebar = () => {
  // Initial state for sections (expanded/collapsed)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    gettingStarted: true,
    repositories: false,
    pipelines: false,
    deployment: false,
    learn: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const mainSections: SidebarSection[] = [
    {
      title: 'Getting Started',
      id: 'getting-started',
      isActive: true,
      items: [
        { title: 'Installation', id: 'installation' },
        { title: 'Quick Start Guide', id: 'quickstart' },
        { title: 'First Pipeline', id: 'first-pipeline' },
      ]
    },
    {
      title: 'Repositories',
      id: 'repositories',
      items: [
        { title: 'Creating Repositories', id: 'creating-repos' },
        { title: 'Managing Access', id: 'access-control' },
        { title: 'Branch Strategies', id: 'branch-strategies' },
      ]
    },
    {
      title: 'CI/CD Pipelines',
      id: 'pipelines',
      items: [
        { title: 'Configuration', id: 'pipeline-config' },
        { title: 'Environment Variables', id: 'env-variables' },
        { title: 'Triggers & Webhooks', id: 'triggers' },
        { title: 'Monitoring & Logs', id: 'monitoring' },
      ]
    },
    {
      title: 'Deployment',
      id: 'deployment',
      items: [
        { title: 'Strategies', id: 'strategies' },
        { title: 'Environments', id: 'environments' },
        { title: 'Rollbacks', id: 'rollbacks' },
        { title: 'Monitoring', id: 'deployment-monitoring' },
      ]
    },
    {
      title: 'Security',
      id: 'security',
      items: [
        { title: 'Best Practices', id: 'security-best-practices' },
        { title: 'Secret Management', id: 'secrets' },
        { title: 'Compliance', id: 'compliance' },
      ]
    },
  ];

  const learnSections: SidebarSection[] = [
    {
      title: 'Tutorials',
      id: 'tutorials',
    },
    {
      title: 'Guides',
      id: 'guides',
    },
    {
      title: 'Examples',
      id: 'examples',
    },
    {
      title: 'API Reference',
      id: 'api',
    },
  ];

  return (
    <div className="sticky top-24">
      {/* Main Sections */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Documentation</h2>
        <ul className="space-y-1">
          {mainSections.map((section) => (
            <li key={section.id} className="mb-2">
              <div className="flex items-center justify-between">
                <a 
                  href={`#${section.id}`} 
                  className={`text-${section.isActive ? 'primary' : 'white/70'} hover:text-white transition-colors font-medium`}
                >
                  {section.title}
                </a>
                {section.items && section.items.length > 0 && (
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="p-1 text-white/50 hover:text-white/80 transition-colors"
                  >
                    {expandedSections[section.id] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
              
              {/* Subsections */}
              {section.items && expandedSections[section.id] && (
                <ul className="ml-4 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${section.id}-${item.id}`}
                        className={`text-sm text-${item.isActive ? 'white' : 'white/60'} hover:text-white block py-1 transition-colors`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Learn Section */}
      <div>
        <h3 className="text-lg font-bold mb-3">Learn</h3>
        <ul className="space-y-1">
          {learnSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`text-white/70 hover:text-white transition-colors block py-1`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocsSidebar;
