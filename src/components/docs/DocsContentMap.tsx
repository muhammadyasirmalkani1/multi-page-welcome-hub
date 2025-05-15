
import React from 'react';
import { CodeBlock } from './CodeBlock';

export type DocSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export const installationDocs: DocSection[] = [
  {
    id: 'installation-requirements',
    title: 'System Requirements',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Before installing GitFlow, make sure your system meets the following requirements:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li>Node.js version 14 or later</li>
          <li>npm version 6 or later (or yarn)</li>
          <li>Git version 2.13 or later</li>
          <li>Operating System: macOS, Windows (10 or later), or Linux</li>
        </ul>
      </div>
    )
  },
  {
    id: 'installation-steps',
    title: 'Installation Steps',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Follow these steps to install GitFlow on your system:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Install the GitFlow CLI
npm install -g @gitflow/cli

# Verify the installation
gitflow --version`}
          </CodeBlock>
        </div>
        <p className="text-white/80">
          You should see the version number displayed, confirming that GitFlow is installed correctly.
        </p>
      </div>
    )
  },
  {
    id: 'installation-docker',
    title: 'Docker Installation',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          You can also use GitFlow with Docker without installing it globally:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Pull the GitFlow Docker image
docker pull gitflow/cli:latest

# Run GitFlow commands using Docker
docker run --rm -it -v $(pwd):/app gitflow/cli init`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const quickstartDocs: DocSection[] = [
  {
    id: 'quickstart-intro',
    title: 'Introduction',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          This quickstart guide will help you get up and running with GitFlow in minutes. By the end, you'll have a working repository with a basic CI/CD pipeline.
        </p>
      </div>
    )
  },
  {
    id: 'quickstart-setup',
    title: 'Initial Setup',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          First, let's create a new GitFlow repository:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Login to GitFlow
gitflow login

# Create a new repository
gitflow repo create my-first-project

# Initialize the repository locally
git clone https://gitflow.dev/your-username/my-first-project
cd my-first-project`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'quickstart-workflow',
    title: 'Basic Workflow',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Now that you have a repository, let's go through a basic workflow:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-white/80 pl-4">
          <li>Create a new branch: <code>git checkout -b feature/new-feature</code></li>
          <li>Make your changes and commit them</li>
          <li>Push your branch: <code>git push origin feature/new-feature</code></li>
          <li>Create a pull request through the GitFlow dashboard</li>
          <li>After review, merge your changes</li>
        </ol>
      </div>
    )
  }
];

export const pipelinesDocs: DocSection[] = [
  {
    id: 'pipelines-overview',
    title: 'Pipelines Overview',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow pipelines are automated workflows that run when certain events occur in your repository. They can build, test, and deploy your code automatically.
        </p>
      </div>
    )
  },
  {
    id: 'pipelines-anatomy',
    title: 'Anatomy of a Pipeline',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          A GitFlow pipeline consists of the following components:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li><strong>Triggers:</strong> Events that start the pipeline (e.g., push to main, pull request)</li>
          <li><strong>Stages:</strong> Logical groups of steps (e.g., build, test, deploy)</li>
          <li><strong>Steps:</strong> Individual tasks within a stage</li>
          <li><strong>Environment:</strong> Where the pipeline runs</li>
        </ul>
      </div>
    )
  }
];

export const pipelinesConfigDocs: DocSection[] = [
  {
    id: 'pipeline-config-file',
    title: 'Pipeline Configuration File',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow pipelines are defined in a <code>.gitflow/pipeline.yml</code> file in your repository. Here's an example configuration:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`name: My Application Pipeline

triggers:
  - push:
      branches: [main, develop]
  - pull_request:
      branches: [main]

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
      - name: Run Linter
        run: npm run lint

  - name: Deploy
    when: branch == 'main'
    environment: production
    steps:
      - name: Deploy to Production
        run: npm run deploy`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'pipeline-variables',
    title: 'Environment Variables',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          You can use environment variables in your pipeline configuration:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`stages:
  - name: Deploy
    environment: production
    variables:
      API_URL: https://api.example.com
      DEBUG: false
    steps:
      - name: Deploy
        run: npm run deploy
        env:
          API_KEY: \${{ secrets.API_KEY }}`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const repositoriesCreateDocs: DocSection[] = [
  {
    id: 'repo-create',
    title: 'Creating Repositories',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow allows you to create and manage Git repositories easily. You can create repositories through the CLI or web interface.
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-3">Using the CLI</h4>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Create a new empty repository
gitflow repo create my-new-project

# Create a repository with a template
gitflow repo create my-new-project --template node-typescript

# Create a repository and clone it immediately
gitflow repo create my-new-project --clone`}
          </CodeBlock>
        </div>
        
        <h4 className="text-lg font-semibold mt-6 mb-3">Using the Web Interface</h4>
        <ol className="list-decimal list-inside space-y-2 text-white/80 pl-4">
          <li>Navigate to your GitFlow dashboard</li>
          <li>Click on the "New Repository" button</li>
          <li>Fill in the repository name and description</li>
          <li>Choose a template (optional)</li>
          <li>Click "Create Repository"</li>
        </ol>
      </div>
    )
  }
];

export const repositoriesAccessDocs: DocSection[] = [
  {
    id: 'repo-access',
    title: 'Repository Access Control',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow provides fine-grained access control for your repositories. You can manage who has access to your repositories and what actions they can perform.
        </p>
        <h4 className="text-lg font-semibold mt-6 mb-3">Access Levels</h4>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li><strong>Read:</strong> View repository content and history</li>
          <li><strong>Write:</strong> Push changes to the repository</li>
          <li><strong>Manage:</strong> Modify repository settings</li>
          <li><strong>Admin:</strong> Full repository control, including deletion</li>
        </ul>
        
        <h4 className="text-lg font-semibold mt-6 mb-3">Managing Access via CLI</h4>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Add a collaborator with read access
gitflow repo collaborator add username my-repo --role read

# Add a team with write access
gitflow repo team add my-team my-repo --role write

# Remove a collaborator
gitflow repo collaborator remove username my-repo`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const deploymentStrategiesDocs: DocSection[] = [
  {
    id: 'deployment-strategies',
    title: 'Deployment Strategies',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow supports several deployment strategies to help you deliver your applications safely and efficiently.
        </p>
        
        <h4 className="text-lg font-semibold mt-6 mb-3">Blue-Green Deployment</h4>
        <p className="text-white/80">
          Blue-Green deployment involves maintaining two identical production environments, with only one serving traffic at any time.
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Example Blue-Green deployment configuration
stages:
  - name: Deploy Blue Environment
    when: is_blue_deployment()
    steps:
      - name: Deploy to Blue
        run: ./deploy.sh blue
      
  - name: Deploy Green Environment
    when: is_green_deployment()
    steps:
      - name: Deploy to Green
        run: ./deploy.sh green
      
  - name: Switch Traffic
    steps:
      - name: Health Check
        run: ./health_check.sh
      - name: Switch Load Balancer
        run: ./switch_traffic.sh`}
          </CodeBlock>
        </div>
        
        <h4 className="text-lg font-semibold mt-6 mb-3">Canary Deployment</h4>
        <p className="text-white/80">
          Canary deployment involves releasing a new version to a small subset of users before rolling it out to everyone.
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Example Canary deployment configuration
stages:
  - name: Deploy Canary
    steps:
      - name: Deploy to 10% of Servers
        run: ./deploy.sh --canary --percentage=10
      - name: Monitor Metrics
        run: ./monitor.sh --time=15m
      
  - name: Full Deployment
    when: canary_successful()
    steps:
      - name: Deploy to All Servers
        run: ./deploy.sh --full`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

// Map of routes to their corresponding documentation content
export const docsRouteMap: Record<string, { title: string, sections: DocSection[] }> = {
  '/docs/installation': {
    title: 'Installation Guide',
    sections: installationDocs
  },
  '/docs/quickstart': {
    title: 'Quick Start Guide',
    sections: quickstartDocs
  },
  '/docs/pipelines': {
    title: 'CI/CD Pipelines',
    sections: pipelinesDocs
  },
  '/docs/pipelines/configuration': {
    title: 'Pipeline Configuration',
    sections: pipelinesConfigDocs
  },
  '/docs/repositories/create': {
    title: 'Creating Repositories',
    sections: repositoriesCreateDocs
  },
  '/docs/repositories/access': {
    title: 'Repository Access Control',
    sections: repositoriesAccessDocs
  },
  '/docs/deployment/strategies': {
    title: 'Deployment Strategies',
    sections: deploymentStrategiesDocs
  },
};
