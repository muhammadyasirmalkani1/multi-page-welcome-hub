
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
          <li>Minimum 4GB RAM (8GB recommended)</li>
          <li>At least 500MB free disk space</li>
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
{`# Install the GitFlow CLI globally
npm install -g @gitflow/cli

# Or using yarn
yarn global add @gitflow/cli

# Verify the installation
gitflow --version

# Check if all dependencies are met
gitflow doctor`}
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
docker run --rm -it -v $(pwd):/app gitflow/cli init

# Create an alias for easier usage
alias gitflow="docker run --rm -it -v $(pwd):/app gitflow/cli"`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'installation-troubleshooting',
    title: 'Troubleshooting',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          If you encounter issues during installation, try these solutions:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li><strong>Permission errors:</strong> Try using sudo (on macOS/Linux) or run as Administrator (Windows)</li>
          <li><strong>Network issues:</strong> Check your internet connection and proxy settings</li>
          <li><strong>Node.js version:</strong> Ensure you're using a supported Node.js version</li>
          <li><strong>Clear npm cache:</strong> Run <code>npm cache clean --force</code></li>
        </ul>
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
cd my-first-project

# Initialize GitFlow in the repository
gitflow init`}
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
          <li>Create a new feature branch: <code>gitflow feature start new-feature</code></li>
          <li>Make your changes and commit them</li>
          <li>Finish the feature: <code>gitflow feature finish new-feature</code></li>
          <li>Push your changes: <code>git push origin develop</code></li>
          <li>Create a pull request through the GitFlow dashboard</li>
        </ol>
      </div>
    )
  }
];

export const firstPipelineDocs: DocSection[] = [
  {
    id: 'first-pipeline-overview',
    title: 'Your First Pipeline',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Creating your first CI/CD pipeline with GitFlow is straightforward. We'll create a simple pipeline that builds and tests your application.
        </p>
      </div>
    )
  },
  {
    id: 'first-pipeline-config',
    title: 'Basic Pipeline Configuration',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Create a <code>.gitflow/pipeline.yml</code> file in your repository:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`name: My First Pipeline

triggers:
  - push:
      branches: [main, develop]

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
      - name: Check Code Style
        run: npm run lint`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const branchStrategiesDocs: DocSection[] = [
  {
    id: 'branch-strategies-overview',
    title: 'Branch Strategies Overview',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow supports various branching strategies to fit your team's workflow and project requirements.
        </p>
      </div>
    )
  },
  {
    id: 'gitflow-strategy',
    title: 'GitFlow Strategy',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          The classic GitFlow strategy uses multiple branch types:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li><strong>main:</strong> Production-ready code</li>
          <li><strong>develop:</strong> Integration branch for features</li>
          <li><strong>feature/*:</strong> Individual feature development</li>
          <li><strong>release/*:</strong> Release preparation</li>
          <li><strong>hotfix/*:</strong> Emergency fixes for production</li>
        </ul>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Start a new feature
gitflow feature start user-authentication

# Finish a feature
gitflow feature finish user-authentication

# Start a release
gitflow release start v1.0.0

# Create a hotfix
gitflow hotfix start critical-bug-fix`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'github-flow',
    title: 'GitHub Flow',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          A simpler strategy with just main branch and feature branches:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-white/80 pl-4">
          <li>Create a branch from main</li>
          <li>Make changes and commit</li>
          <li>Open a pull request</li>
          <li>Review and merge to main</li>
          <li>Deploy from main</li>
        </ol>
      </div>
    )
  }
];

export const envVariablesDocs: DocSection[] = [
  {
    id: 'env-variables-overview',
    title: 'Environment Variables Overview',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Environment variables allow you to configure your pipelines and applications without hardcoding sensitive information.
        </p>
      </div>
    )
  },
  {
    id: 'env-variables-pipeline',
    title: 'Pipeline Environment Variables',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          You can define environment variables at different levels in your pipeline:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Global pipeline variables
variables:
  NODE_ENV: production
  API_URL: https://api.example.com

stages:
  - name: Build
    variables:
      BUILD_TARGET: web
    steps:
      - name: Build
        run: npm run build
        env:
          CUSTOM_VAR: "stage-specific-value"

  - name: Deploy
    environment: production
    steps:
      - name: Deploy
        run: npm run deploy
        env:
          API_KEY: \${{ secrets.PRODUCTION_API_KEY }}
          DATABASE_URL: \${{ secrets.DATABASE_URL }}`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'env-variables-secrets',
    title: 'Managing Secrets',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Sensitive information should be stored as secrets, not regular environment variables:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Add secrets via CLI
gitflow secret add API_KEY "your-secret-api-key"
gitflow secret add DATABASE_PASSWORD "secure-password"

# List secrets (values are hidden)
gitflow secret list

# Use secrets in pipeline
env:
  API_KEY: \${{ secrets.API_KEY }}
  DB_PASS: \${{ secrets.DATABASE_PASSWORD }}`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const triggersWebhooksDocs: DocSection[] = [
  {
    id: 'triggers-overview',
    title: 'Triggers & Webhooks Overview',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Triggers determine when your pipelines run. GitFlow supports various trigger types including push events, pull requests, schedules, and custom webhooks.
        </p>
      </div>
    )
  },
  {
    id: 'common-triggers',
    title: 'Common Trigger Types',
    content: (
      <div className="space-y-4">
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`triggers:
  # Trigger on push to specific branches
  - push:
      branches: [main, develop, "feature/*"]
      
  # Trigger on pull requests
  - pull_request:
      branches: [main]
      types: [opened, synchronize, reopened]
      
  # Scheduled triggers (cron syntax)
  - schedule:
      cron: "0 2 * * 1-5"  # Every weekday at 2 AM
      
  # Manual triggers
  - workflow_dispatch:
      inputs:
        environment:
          description: "Environment to deploy to"
          required: true
          default: "staging"
          
  # Tag-based triggers
  - tag:
      pattern: "v*.*.*"`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'webhooks-setup',
    title: 'Custom Webhooks',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Set up custom webhooks to integrate with external services:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Configure webhook triggers
triggers:
  - webhook:
      path: "/deploy-staging"
      method: "POST"
      headers:
        authorization: \${{ secrets.WEBHOOK_SECRET }}
        
  - webhook:
      path: "/notify"
      method: "GET"
      query_params:
        - key: "token"
          value: \${{ secrets.NOTIFICATION_TOKEN }}`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const monitoringLogsDocs: DocSection[] = [
  {
    id: 'monitoring-overview',
    title: 'Monitoring & Logs Overview',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow provides comprehensive monitoring and logging capabilities to help you track pipeline performance and troubleshoot issues.
        </p>
      </div>
    )
  },
  {
    id: 'pipeline-monitoring',
    title: 'Pipeline Monitoring',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Monitor your pipeline execution with built-in metrics and alerts:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li>Execution time tracking</li>
          <li>Success/failure rates</li>
          <li>Resource utilization</li>
          <li>Queue times and bottlenecks</li>
        </ul>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Enable monitoring in your pipeline
monitoring:
  enabled: true
  alerts:
    - type: failure
      channels: [email, slack]
    - type: duration
      threshold: "10m"
      channels: [slack]
      
  metrics:
    - execution_time
    - success_rate
    - resource_usage`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'log-management',
    title: 'Log Management',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Effective log management helps with debugging and compliance:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Configure logging levels
logging:
  level: info
  format: json
  retention: "30d"
  
  outputs:
    - type: console
    - type: file
      path: "/logs/pipeline.log"
    - type: external
      endpoint: "https://logs.example.com/api"
      
# View logs via CLI
gitflow logs pipeline my-pipeline --follow
gitflow logs step build-step --since 1h`}
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
{`stages:
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
{`stages:
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

        <h4 className="text-lg font-semibold mt-6 mb-3">Rolling Deployment</h4>
        <p className="text-white/80">
          Rolling deployment gradually replaces instances of the previous version with the new version.
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`deployment:
  strategy: rolling
  rolling:
    max_unavailable: 1
    max_surge: 1
    
stages:
  - name: Rolling Deploy
    steps:
      - name: Deploy with Rolling Update
        run: kubectl rollout restart deployment/my-app
      - name: Wait for Rollout
        run: kubectl rollout status deployment/my-app`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const environmentsDocs: DocSection[] = [
  {
    id: 'environments-overview',
    title: 'Environment Management',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Environments allow you to separate your development, staging, and production deployments with different configurations.
        </p>
      </div>
    )
  },
  {
    id: 'environment-config',
    title: 'Environment Configuration',
    content: (
      <div className="space-y-4">
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Define environments in .gitflow/environments.yml
environments:
  development:
    url: https://dev.myapp.com
    variables:
      API_URL: https://api-dev.myapp.com
      DEBUG: true
      
  staging:
    url: https://staging.myapp.com
    variables:
      API_URL: https://api-staging.myapp.com
      DEBUG: false
    secrets:
      - DATABASE_URL
      - API_KEY
      
  production:
    url: https://myapp.com
    variables:
      API_URL: https://api.myapp.com
      DEBUG: false
    secrets:
      - DATABASE_URL
      - API_KEY
      - STRIPE_SECRET_KEY
    protection:
      required_reviewers: 2
      restrict_pushes: true`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'environment-promotion',
    title: 'Environment Promotion',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Promote deployments through environments with proper controls:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Promote through environments
gitflow deploy promote --from staging --to production

# Deploy to specific environment
gitflow deploy --environment production --version v1.2.3

# List environment status
gitflow environments status`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const rollbacksDocs: DocSection[] = [
  {
    id: 'rollbacks-overview',
    title: 'Rollback Strategies',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          When deployments go wrong, having a solid rollback strategy is crucial for maintaining system reliability.
        </p>
      </div>
    )
  },
  {
    id: 'automatic-rollbacks',
    title: 'Automatic Rollbacks',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Configure automatic rollbacks based on health checks and metrics:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`deployment:
  rollback:
    enabled: true
    triggers:
      - health_check_failure:
          endpoint: "/health"
          threshold: 3
          timeout: "30s"
      - error_rate:
          threshold: 5%
          window: "5m"
      - response_time:
          threshold: "2s"
          percentile: 95
          
    strategy: immediate
    preserve_data: true`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'manual-rollbacks',
    title: 'Manual Rollbacks',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Perform manual rollbacks when needed:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Rollback to previous version
gitflow rollback --environment production

# Rollback to specific version
gitflow rollback --environment production --version v1.2.0

# List available versions for rollback
gitflow versions --environment production

# Rollback with confirmation
gitflow rollback --environment production --confirm`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const securityBestPracticesDocs: DocSection[] = [
  {
    id: 'security-overview',
    title: 'Security Best Practices',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Follow these security best practices to keep your GitFlow pipelines and deployments secure.
        </p>
      </div>
    )
  },
  {
    id: 'pipeline-security',
    title: 'Pipeline Security',
    content: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li>Use least privilege access for pipeline execution</li>
          <li>Scan dependencies for vulnerabilities</li>
          <li>Implement code signing for deployments</li>
          <li>Use secure base images for containers</li>
          <li>Enable audit logging for all pipeline activities</li>
        </ul>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`stages:
  - name: Security Scan
    steps:
      - name: Dependency Audit
        run: npm audit --audit-level moderate
      - name: Container Scan
        run: docker scan my-app:latest
      - name: Code Quality
        run: sonarqube-scanner
        
  - name: Sign Artifacts
    steps:
      - name: Sign Container
        run: cosign sign my-app:latest`}
          </CodeBlock>
        </div>
      </div>
    )
  }
];

export const secretManagementDocs: DocSection[] = [
  {
    id: 'secret-management-overview',
    title: 'Secret Management',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Proper secret management is crucial for maintaining security in your CI/CD pipelines.
        </p>
      </div>
    )
  },
  {
    id: 'secret-storage',
    title: 'Secret Storage and Access',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow provides secure secret storage with encryption at rest and in transit:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Add secrets securely
gitflow secret add DATABASE_URL "postgresql://user:pass@host:5432/db"
gitflow secret add API_KEY "sk-1234567890abcdef" --environment production

# Use secrets in pipelines
env:
  DATABASE_URL: \${{ secrets.DATABASE_URL }}
  API_KEY: \${{ secrets.API_KEY }}
  
# Rotate secrets
gitflow secret rotate API_KEY --generate-new
gitflow secret update DATABASE_URL "new-connection-string"`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'secret-best-practices',
    title: 'Secret Best Practices',
    content: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li>Never hardcode secrets in your code or configuration files</li>
          <li>Use environment-specific secrets</li>
          <li>Rotate secrets regularly</li>
          <li>Use short-lived tokens when possible</li>
          <li>Audit secret access and usage</li>
          <li>Implement secret scanning in your pipelines</li>
        </ul>
      </div>
    )
  }
];

export const complianceDocs: DocSection[] = [
  {
    id: 'compliance-overview',
    title: 'Compliance Overview',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          GitFlow helps you meet various compliance requirements through built-in controls and audit capabilities.
        </p>
      </div>
    )
  },
  {
    id: 'audit-logging',
    title: 'Audit Logging',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Comprehensive audit logging for compliance requirements:
        </p>
        <div className="relative">
          <CodeBlock className="bg-gray-900">
{`# Configure audit logging
audit:
  enabled: true
  retention: "7y"  # 7 years for SOX compliance
  events:
    - pipeline_execution
    - deployment
    - secret_access
    - configuration_changes
    - user_access
    
  outputs:
    - type: file
      path: "/audit/gitflow-audit.log"
    - type: siem
      endpoint: "https://siem.company.com/api"
      
# Query audit logs
gitflow audit query --event deployment --since "2023-01-01"
gitflow audit export --format csv --date-range "2023-01-01,2023-12-31"`}
          </CodeBlock>
        </div>
      </div>
    )
  },
  {
    id: 'compliance-controls',
    title: 'Compliance Controls',
    content: (
      <div className="space-y-4">
        <p className="text-white/80">
          Implement compliance controls for various standards:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 pl-4">
          <li><strong>SOC 2:</strong> Access controls, monitoring, and audit logging</li>
          <li><strong>PCI DSS:</strong> Network segmentation and data protection</li>
          <li><strong>GDPR:</strong> Data privacy and right to deletion</li>
          <li><strong>HIPAA:</strong> Healthcare data protection controls</li>
          <li><strong>SOX:</strong> Financial reporting controls and audit trails</li>
        </ul>
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
  '/docs/first-pipeline': {
    title: 'Creating Your First Pipeline',
    sections: firstPipelineDocs
  },
  '/docs/pipelines': {
    title: 'CI/CD Pipelines',
    sections: [
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
    ]
  },
  '/docs/pipelines/configuration': {
    title: 'Pipeline Configuration',
    sections: [
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
    ]
  },
  '/docs/repositories/create': {
    title: 'Creating Repositories',
    sections: [
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
    ]
  },
  '/docs/repositories/access': {
    title: 'Repository Access Control',
    sections: [
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
    ]
  },
  '/docs/branch-strategies': {
    title: 'Branch Strategies',
    sections: branchStrategiesDocs
  },
  '/docs/environment-variables': {
    title: 'Environment Variables',
    sections: envVariablesDocs
  },
  '/docs/triggers-webhooks': {
    title: 'Triggers & Webhooks',
    sections: triggersWebhooksDocs
  },
  '/docs/monitoring-logs': {
    title: 'Monitoring & Logs',
    sections: monitoringLogsDocs
  },
  '/docs/deployment/strategies': {
    title: 'Deployment Strategies',
    sections: deploymentStrategiesDocs
  },
  '/docs/environments': {
    title: 'Environment Management',
    sections: environmentsDocs
  },
  '/docs/rollbacks': {
    title: 'Rollback Strategies',
    sections: rollbacksDocs
  },
  '/docs/security/best-practices': {
    title: 'Security Best Practices',
    sections: securityBestPracticesDocs
  },
  '/docs/security/secrets': {
    title: 'Secret Management',
    sections: secretManagementDocs
  },
  '/docs/security/compliance': {
    title: 'Compliance',
    sections: complianceDocs
  },
};
