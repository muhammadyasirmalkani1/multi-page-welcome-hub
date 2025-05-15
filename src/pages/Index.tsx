
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Open-source code hosting &<br />
              <span className="text-primary text-glow">pipeline engine</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              The complete platform for modern development teams to ship code faster and automate everything.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-12">
              <div className="flex items-center bg-white/5 rounded-full px-4 py-2">
                <span className="text-xs text-white/70 mr-2">TRUSTED BY</span>
                <div className="flex space-x-4">
                  <span className="text-sm font-medium">Microsoft</span>
                  <span className="text-sm font-medium">Google</span>
                  <span className="text-sm font-medium">Netflix</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="blue-glow">Familiar Git experience.</span><br />
                Packed with essential features.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all hover:shadow-glow-purple">
                <div className="w-12 h-12 rounded-full feature-icon flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Powerful CI/CD</h3>
                <p className="text-white/70">Build, test, and deploy with ease using our powerful pipeline engine.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all hover:shadow-glow-purple">
                <div className="w-12 h-12 rounded-full feature-icon flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-white/70">Advanced security features to keep your code and pipelines safe.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all hover:shadow-glow-purple">
                <div className="w-12 h-12 rounded-full feature-icon flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                <p className="text-white/70">Gain insights into your development workflow and team productivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern grid-bg opacity-10"></div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-primary text-glow">Commit.</span><br />
                  <span className="blue-glow">Branch.</span><br />
                  Merge.
                </h2>
                <p className="text-white/80 mb-8">
                  A complete workflow solution for engineering teams of all sizes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Advanced branch protection and permissions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Customizable approval workflows</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">Code review tools with AI-powered suggestions</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/features">
                    <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white">
                      Learn More About Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="code-block p-6 rounded-lg animate-float">
                  <pre className="text-sm text-white/90 font-mono">
                    <code>
{`# Clone repository
git clone https://gitflow.dev/your-repo.git

# Create a new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push changes
git push origin feature/new-feature

# Create pull request
gitflow pr create`}
                    </code>
                  </pre>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Ship code fast<br />
                <span className="text-primary text-glow">automate everything.</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our intelligent CI/CD platform accelerates your pipeline for faster, more reliable releases.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4 blue-glow">Build.</h3>
                <p className="text-white/70 mb-6">
                  Compile code and run tests with ease. Support for all major programming languages and build tools.
                </p>
                <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
                  Learn More
                </Button>
              </div>
              <div className="bg-card rounded-lg p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4 blue-glow">Test.</h3>
                <p className="text-white/70 mb-6">
                  Run unit tests, integration tests, and end-to-end tests automatically with every commit.
                </p>
                <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
                  Learn More
                </Button>
              </div>
              <div className="bg-card rounded-lg p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4 blue-glow">Deploy.</h3>
                <p className="text-white/70 mb-6">
                  Deploy to any environment with confidence. Support for Kubernetes, AWS, GCP, Azure, and more.
                </p>
                <Button className="bg-secondary/20 hover:bg-secondary/30 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Your Code<br />
                Your Language<br />
                <span className="text-primary text-glow">Your Platform</span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Supporting the needs of every development team, across all tech stacks and environments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all">
                  <div className="w-12 h-12 rounded-full feature-icon flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Universal Compatibility</h3>
                  <p className="text-white/70">Support for all major programming languages, frameworks, and platforms.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Setup GitFlow in
                <span className="text-primary text-glow"> 30 seconds</span>
              </h2>
              <p className="text-white/80 mb-8">
                Start building better software today with our comprehensive development platform.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
