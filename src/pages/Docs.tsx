
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Docs = () => {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
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

        {/* Getting Started */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
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
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <section id="getting-started">
                  <h2 className="text-2xl font-bold mb-6">Getting Started with GitFlow</h2>
                  
                  <div className="space-y-8">
                    <div className="p-6 rounded-lg border border-white/10 bg-card">
                      <h3 className="text-xl font-bold mb-4">Installation</h3>
                      <p className="text-white/80 mb-4">
                        Get started with GitFlow in minutes. Follow these steps to set up your first repository and pipeline.
                      </p>
                      <div className="code-block p-4 rounded-md mb-4">
                        <pre className="text-sm text-white/90 font-mono overflow-x-auto">
                          <code>
{`# Install the GitFlow CLI
npm install -g @gitflow/cli

# Login to GitFlow
gitflow login

# Initialize a new repository
gitflow init my-project`}
                          </code>
                        </pre>
                      </div>
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
                      <div className="code-block p-4 rounded-md mb-4">
                        <pre className="text-sm text-white/90 font-mono overflow-x-auto">
                          <code>
{`# Add a pipeline configuration to your repository
gitflow pipeline init > .gitflow/pipeline.yml

# Edit the pipeline configuration
nano .gitflow/pipeline.yml

# Push the changes to your repository
git add .gitflow/pipeline.yml
git commit -m "Add GitFlow pipeline"
git push origin main`}
                          </code>
                        </pre>
                      </div>
                      <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
                        Read Pipeline Guide
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-12 mb-16">
                    <h3 className="text-xl font-bold mb-6">Popular Documentation Topics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Repository Management",
                          description: "Learn how to create, manage, and organize your Git repositories.",
                          link: "#repositories"
                        },
                        {
                          title: "Pipeline Configuration",
                          description: "Configure your CI/CD pipelines for automated builds and deployments.",
                          link: "#pipelines"
                        },
                        {
                          title: "Deployment Strategies",
                          description: "Learn about various deployment strategies and how to implement them.",
                          link: "#deployment"
                        },
                        {
                          title: "Security Best Practices",
                          description: "Secure your code and pipelines with our security best practices.",
                          link: "#security"
                        },
                      ].map((topic, index) => (
                        <a 
                          key={index}
                          href={topic.link} 
                          className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all group"
                        >
                          <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{topic.title}</h4>
                          <p className="text-white/70">{topic.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12 p-6 rounded-lg border border-white/10 bg-card">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">Need more help?</h3>
                        <p className="text-white/70">Join our community forum or contact our support team.</p>
                      </div>
                      <div className="flex space-x-4">
                        <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
                          Community Forum
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                          Contact Support
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Docs;
