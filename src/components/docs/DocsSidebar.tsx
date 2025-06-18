
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

type SidebarSection = {
  title: string;
  id: string;
  route?: string;
  items?: {
    title: string;
    id: string;
    route?: string;
  }[];
};

const DocsSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Initial state for sections (expanded/collapsed)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'getting-started': true,
    repositories: false,
    pipelines: false,
    deployment: false,
    security: false,
    learn: false,
  });

  // Automatically expand a section if the current route is part of that section
  useEffect(() => {
    const newExpandedSections = { ...expandedSections };
    
    if (currentPath.includes('/docs/installation') || currentPath.includes('/docs/quickstart') || currentPath.includes('/docs/first-pipeline')) {
      newExpandedSections['getting-started'] = true;
    }
    
    if (currentPath.includes('/docs/repositories') || currentPath.includes('/docs/branch-strategies')) {
      newExpandedSections['repositories'] = true;
    }
    
    if (currentPath.includes('/docs/pipelines') || currentPath.includes('/docs/environment-variables') || currentPath.includes('/docs/triggers-webhooks') || currentPath.includes('/docs/monitoring-logs')) {
      newExpandedSections['pipelines'] = true;
    }
    
    if (currentPath.includes('/docs/deployment') || currentPath.includes('/docs/environments') || currentPath.includes('/docs/rollbacks')) {
      newExpandedSections['deployment'] = true;
    }
    
    if (currentPath.includes('/docs/security')) {
      newExpandedSections['security'] = true;
    }
    
    setExpandedSections(newExpandedSections);
  }, [currentPath]);

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
      items: [
        { title: 'Installation', id: 'installation', route: '/docs/installation' },
        { title: 'Quick Start Guide', id: 'quickstart', route: '/docs/quickstart' },
        { title: 'First Pipeline', id: 'first-pipeline', route: '/docs/first-pipeline' },
      ]
    },
    {
      title: 'Repositories',
      id: 'repositories',
      items: [
        { title: 'Creating Repositories', id: 'creating-repos', route: '/docs/repositories/create' },
        { title: 'Managing Access', id: 'access-control', route: '/docs/repositories/access' },
        { title: 'Branch Strategies', id: 'branch-strategies', route: '/docs/branch-strategies' },
      ]
    },
    {
      title: 'CI/CD Pipelines',
      id: 'pipelines',
      route: '/docs/pipelines',
      items: [
        { title: 'Configuration', id: 'pipeline-config', route: '/docs/pipelines/configuration' },
        { title: 'Environment Variables', id: 'env-variables', route: '/docs/environment-variables' },
        { title: 'Triggers & Webhooks', id: 'triggers', route: '/docs/triggers-webhooks' },
        { title: 'Monitoring & Logs', id: 'monitoring', route: '/docs/monitoring-logs' },
      ]
    },
    {
      title: 'Deployment',
      id: 'deployment',
      items: [
        { title: 'Strategies', id: 'strategies', route: '/docs/deployment/strategies' },
        { title: 'Environments', id: 'environments', route: '/docs/environments' },
        { title: 'Rollbacks', id: 'rollbacks', route: '/docs/rollbacks' },
      ]
    },
    {
      title: 'Security',
      id: 'security',
      items: [
        { title: 'Best Practices', id: 'security-best-practices', route: '/docs/security/best-practices' },
        { title: 'Secret Management', id: 'secrets', route: '/docs/security/secrets' },
        { title: 'Compliance', id: 'compliance', route: '/docs/security/compliance' },
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
  
  // Helper to determine if a section or item is active
  const isActive = (route?: string) => {
    if (!route) return false;
    return currentPath === route;
  };

  return (
    <div className="sticky top-24">
      {/* Main Sections */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Documentation</h2>
        <ul className="space-y-1">
          {mainSections.map((section) => (
            <li key={section.id} className="mb-2">
              <div className="flex items-center justify-between">
                {section.route ? (
                  <Link 
                    to={section.route} 
                    className={`${isActive(section.route) ? 'text-primary' : 'text-white/70'} hover:text-white transition-colors font-medium`}
                  >
                    {section.title}
                  </Link>
                ) : (
                  <a 
                    href={`#${section.id}`} 
                    className="text-white/70 hover:text-white transition-colors font-medium"
                  >
                    {section.title}
                  </a>
                )}
                
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
                      {item.route ? (
                        <Link
                          to={item.route}
                          className={`text-sm ${isActive(item.route) ? 'text-white font-medium' : 'text-white/60'} hover:text-white block py-1 transition-colors`}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={`#${section.id}-${item.id}`}
                          className="text-sm text-white/60 hover:text-white block py-1 transition-colors"
                        >
                          {item.title}
                        </a>
                      )}
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
                className="text-white/70 hover:text-white transition-colors block py-1"
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
