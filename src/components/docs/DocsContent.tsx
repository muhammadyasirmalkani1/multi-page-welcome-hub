
import React from 'react';
import { Button } from '@/components/ui/button';
import HelpSection from './HelpSection';
import PopularTopics from './PopularTopics';
import CodeBlock from './CodeBlock';

const DocsContent = () => {
  return (
    <section id="getting-started">
      <h2 className="text-2xl font-bold mb-6">Getting Started with GitFlow</h2>
      
      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-white/10 bg-card">
          <h3 className="text-xl font-bold mb-4">Installation</h3>
          <p className="text-white/80 mb-4">
            Get started with GitFlow in minutes. Follow these steps to set up your first repository and pipeline.
          </p>
          <CodeBlock>
{`# Install the GitFlow CLI
npm install -g @gitflow/cli

# Login to GitFlow
gitflow login

# Initialize a new repository
gitflow init my-project`}
          </CodeBlock>
          <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
            Read Installation Guide
          </Button>
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
          <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
            Read Quick Start Guide
          </Button>
        </div>
        
        <div className="p-6 rounded-lg border border-white/10 bg-card">
          <h3 className="text-xl font-bold mb-4">Creating Your First Pipeline</h3>
          <p className="text-white/80 mb-4">
            Learn how to create a simple CI/CD pipeline to build, test, and deploy your code.
          </p>
          <CodeBlock>
{`# Add a pipeline configuration to your repository
gitflow pipeline init > .gitflow/pipeline.yml

# Edit the pipeline configuration
nano .gitflow/pipeline.yml

# Push the changes to your repository
git add .gitflow/pipeline.yml
git commit -m "Add GitFlow pipeline"
git push origin main`}
          </CodeBlock>
          <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
            Read Pipeline Guide
          </Button>
        </div>
      </div>
      
      <PopularTopics />
      <HelpSection />
    </section>
  );
};

export default DocsContent;
