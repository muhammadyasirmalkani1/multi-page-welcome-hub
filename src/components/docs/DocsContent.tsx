import React from 'react';
import { Button } from '@/components/ui/button';
import HelpSection from './HelpSection';
import PopularTopics from './PopularTopics';
import CodeBlock from './CodeBlock';
import { Link, useLocation } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { docsRouteMap } from './DocsContentMap';

const DocsContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code snippet has been copied to your clipboard.",
      duration: 3000,
    });
  };

  // If we have specific content for this route, show it
  if (docsRouteMap[currentPath]) {
    const { title, sections } = docsRouteMap[currentPath];
    
    return (
      <section>
        <div className="pb-8">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="p-6 rounded-lg border border-white/10 bg-card">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <div className="text-white/80">{section.content}</div>
              </div>
            ))}
          </div>
        </div>

        <PopularTopics />
        <HelpSection />
      </section>
    );
  }

  // Otherwise show default content for the main /docs route
  return (
    <section>
      <div id="getting-started" className="pb-12">
        <h2 className="text-2xl font-bold mb-6">Getting Started with GitFlow</h2>
        
        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-xl font-bold mb-4">Installation</h3>
            <p className="text-white/80 mb-4">
              Get started with GitFlow in minutes. Follow these steps to set up your first repository and pipeline.
            </p>
            <div className="relative">
              <CodeBlock className="bg-gray-900">
{`# Install the GitFlow CLI
npm install -g @gitflow/cli

# Login to GitFlow
gitflow login

# Initialize a new repository
gitflow init my-project`}
              </CodeBlock>
              <button 
                onClick={() => copyToClipboard(`# Install the GitFlow CLI\nnpm install -g @gitflow/cli\n\n# Login to GitFlow\ngitflow login\n\n# Initialize a new repository\ngitflow init my-project`)} 
                className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
                <Link to="/docs/installation">Read Installation Guide</Link>
              </Button>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-xl font-bold mb-4">Quick Start Guide</h3>
            <p className="text-white/80 mb-4">
              Learn the basics of GitFlow with this quick start guide. We'll cover repositories, branches, pipelines, and deployments.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/80 mb-4">
              <li>Create a new repository</li>
              <li>Clone the repository to your local machine</li>
              <li>Create a branch for your changes</li>
              <li>Push your changes and create a pull request</li>
              <li>Set up a CI/CD pipeline</li>
            </ol>
            <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
              <Link to="/docs/quickstart">Read Quick Start Guide</Link>
            </Button>
          </div>
          
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-xl font-bold mb-4">Creating Your First Pipeline</h3>
            <p className="text-white/80 mb-4">
              Learn how to create a simple CI/CD pipeline to build, test, and deploy your code.
            </p>
            <div className="relative">
              <CodeBlock className="bg-gray-900">
{`# Add a pipeline configuration to your repository
gitflow pipeline init > .gitflow/pipeline.yml

# Edit the pipeline configuration
nano .gitflow/pipeline.yml

# Push the changes to your repository
git add .gitflow/pipeline.yml
git commit -m "Add GitFlow pipeline"
git push origin main`}
              </CodeBlock>
              <button 
                onClick={() => copyToClipboard(`# Add a pipeline configuration to your repository\ngitflow pipeline init > .gitflow/pipeline.yml\n\n# Edit the pipeline configuration\nnano .gitflow/pipeline.yml\n\n# Push the changes to your repository\ngit add .gitflow/pipeline.yml\ngit commit -m "Add GitFlow pipeline"\ngit push origin main`)} 
                className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
                <Link to="/docs/pipelines">Read Pipeline Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="repositories" className="py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-6">Repository Management</h2>
        <p className="text-white/80 mb-6">
          Learn how to create, manage, and organize your Git repositories efficiently with GitFlow.
        </p>
        
        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-xl font-bold mb-4">Creating Repositories</h3>
            <p className="text-white/80 mb-4">
              GitFlow makes it easy to create and manage repositories for your projects.
            </p>
            <div className="relative">
              <CodeBlock className="bg-gray-900">
{`# Create a new repository
gitflow repo create my-new-project

# Clone an existing repository
gitflow repo clone username/existing-project

# List all repositories
gitflow repo list`}
              </CodeBlock>
              <button 
                onClick={() => copyToClipboard(`# Create a new repository\ngitflow repo create my-new-project\n\n# Clone an existing repository\ngitflow repo clone username/existing-project\n\n# List all repositories\ngitflow repo list`)} 
                className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
                <Link to="/docs/repositories/create">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-xl font-bold mb-4">Repository Access Control</h3>
            <p className="text-white/80 mb-4">
              Control who has access to your repositories and what actions they can perform.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 mb-4">
              <li>Add and manage collaborators</li>
              <li>Set up teams and assign permissions</li>
              <li>Configure branch protection rules</li>
              <li>Manage deployment access</li>
            </ul>
            <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
              <Link to="/docs/repositories/access">Access Control Guide</Link>
            </Button>
          </div>
        </div>
      </div>

      <div id="pipelines" className="py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-6">CI/CD Pipelines</h2>
        <p className="text-white/80 mb-6">
          Automate your build, test, and deployment processes with GitFlow pipelines.
        </p>
        
        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-xl font-bold mb-4">Pipeline Configuration</h3>
            <p className="text-white/80 mb-4">
              Learn how to configure your pipelines for different environments and workflows.
            </p>
            <div className="relative">
              <CodeBlock className="bg-gray-900">
{`# Example pipeline.yml configuration
name: My Application Pipeline

stages:
  - name: Build
    steps:
      - name: Install Dependencies
        run: npm install
      - name: Build Application
        run: npm run build

  - name: Test
    steps:
      - name: Run Tests
        run: npm test

  - name: Deploy
    environment: production
    steps:
      - name: Deploy to Production
        run: npm run deploy`}
              </CodeBlock>
              <button 
                onClick={() => copyToClipboard(`# Example pipeline.yml configuration\nname: My Application Pipeline\n\nstages:\n  - name: Build\n    steps:\n      - name: Install Dependencies\n        run: npm install\n      - name: Build Application\n        run: npm run build\n\n  - name: Test\n    steps:\n      - name: Run Tests\n        run: npm test\n\n  - name: Deploy\n    environment: production\n    steps:\n      - name: Deploy to Production\n        run: npm run deploy`)} 
                className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                aria-label="Copy code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
                <Link to="/docs/pipelines/configuration">Configuration Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="deployment" className="py-12 border-t border-white/10">
        <h2 className="text-2xl font-bold mb-6">Deployment Strategies</h2>
        <p className="text-white/80 mb-6">
          Learn about different deployment strategies and how to implement them with GitFlow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-lg font-bold mb-3">Blue-Green Deployment</h3>
            <p className="text-white/80">
              Maintain two identical production environments, with only one serving traffic at a time.
              This allows for zero-downtime deployments and easy rollbacks.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-lg font-bold mb-3">Canary Deployment</h3>
            <p className="text-white/80">
              Release new features to a small subset of users before rolling them out to everyone.
              This allows you to test new features with real users while limiting potential impact.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-lg font-bold mb-3">Rolling Deployment</h3>
            <p className="text-white/80">
              Gradually replace instances of the previous version with the new version,
              ensuring that service remains available throughout the process.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-white/10 bg-card">
            <h3 className="text-lg font-bold mb-3">A/B Testing Deployment</h3>
            <p className="text-white/80">
              Deploy multiple versions of your application to different user segments
              to compare and analyze the performance and user engagement.
            </p>
          </div>
        </div>
        
        <Button asChild className="bg-secondary/20 hover:bg-secondary/30 text-white">
          <Link to="/docs/deployment/strategies">Learn More About Deployment Strategies</Link>
        </Button>
      </div>

      <PopularTopics />
      <HelpSection />
    </section>
  );
};

export default DocsContent;
