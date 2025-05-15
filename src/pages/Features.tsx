
import React from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary text-glow">Features</span> that<br />
              power your workflow
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Everything you need to build, test, and deploy your code with confidence.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-full feature-icon flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CI/CD Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern grid-bg opacity-10"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-primary text-glow">Advanced CI/CD</span><br />
                  Pipeline Configuration
                </h2>
                <p className="text-white/80 mb-8">
                  Build, test, and deploy with confidence using our powerful pipeline configuration system.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">YAML-based configuration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Parallel task execution</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Caching and artifact management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Self-hosted or cloud runners</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="code-block p-6 rounded-lg animate-float">
                  <pre className="text-sm text-white/90 font-mono">
                    <code>
{`# GitFlow CI Pipeline
name: Build & Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install Dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Test
        run: npm test`}
                    </code>
                  </pre>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-primary text-glow">Compare</span> GitFlow
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                See how GitFlow stacks up against other popular CI/CD platforms.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">GitFlow</th>
                    <th className="p-4 text-center">GitHub Actions</th>
                    <th className="p-4 text-center">GitLab CI</th>
                    <th className="p-4 text-center">Jenkins</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Parallel Execution", gitflow: true, github: true, gitlab: true, jenkins: true },
                    { name: "Self-hosted Runners", gitflow: true, github: true, gitlab: true, jenkins: true },
                    { name: "Built-in Package Registry", gitflow: true, github: true, gitlab: true, jenkins: false },
                    { name: "AI-powered Suggestions", gitflow: true, github: false, gitlab: false, jenkins: false },
                    { name: "Advanced Caching", gitflow: true, github: true, gitlab: true, jenkins: false },
                    { name: "Pipeline Visualization", gitflow: true, github: false, gitlab: true, jenkins: true },
                    { name: "Cost Optimization", gitflow: true, github: false, gitlab: false, jenkins: false },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="p-4 text-white/80">{row.name}</td>
                      <td className="p-4 text-center">{row.gitflow ? "✅" : "❌"}</td>
                      <td className="p-4 text-center">{row.github ? "✅" : "❌"}</td>
                      <td className="p-4 text-center">{row.gitlab ? "✅" : "❌"}</td>
                      <td className="p-4 text-center">{row.jenkins ? "✅" : "❌"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="p-12 rounded-lg border border-white/10 bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-70"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                  <p className="text-white/80">
                    Start building better software today with our comprehensive development platform.
                  </p>
                </div>
                <div>
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Feature data
const features = [
  {
    title: "CI/CD Pipelines",
    description: "Powerful continuous integration and delivery pipelines to automate your build, test, and deployment processes.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
  },
  {
    title: "Code Repositories",
    description: "Secure, scalable Git repositories for your source code with advanced access controls and branch protection.",
    icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
  },
  {
    title: "Code Review",
    description: "Streamline your code review process with inline comments, approvals, and AI-powered suggestions.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  },
  {
    title: "Artifact Management",
    description: "Store and manage your build artifacts with version control, dependencies tracking, and secure access.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    title: "Container Registry",
    description: "Secure container registry for storing, managing, and deploying your Docker images.",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
  },
  {
    title: "Security Scanning",
    description: "Automated security scanning to identify vulnerabilities in your code, dependencies, and containers.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "Infrastructure as Code",
    description: "Define your infrastructure as code with GitFlow's powerful IaC integrations.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  },
  {
    title: "Issue Tracking",
    description: "Track bugs, features, and tasks with customizable workflows, labels, and milestones.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  },
  {
    title: "Analytics & Insights",
    description: "Gain insights into your development process with comprehensive analytics and reporting.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
];

export default Features;
