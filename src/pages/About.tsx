
import React from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary text-glow">About</span> GitFlow
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              We're building the future of software development and deployment.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  At GitFlow, we believe that software development should be fast, reliable, and accessible to everyone. Our mission is to build tools that empower developers to focus on what matters most: writing great code.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  We're committed to open source and giving back to the community. That's why our core platform is open source and free to use for individuals and small teams. We believe that by making powerful development tools accessible to everyone, we can help push the industry forward.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video rounded-lg overflow-hidden bg-card border border-white/10 code-block p-8 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Open Source at Heart</h3>
                    <p className="text-white/70">
                      Our core platform is open source and free for everyone to use and contribute to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 pb-12 border-l border-white/10">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
                <h3 className="text-xl font-bold mb-2">2020: The Beginning</h3>
                <p className="text-white/80">
                  GitFlow was founded by a team of experienced developers who were frustrated with the existing CI/CD tools. We set out to build a better solution that would be fast, reliable, and easy to use.
                </p>
              </div>
              
              <div className="relative pl-8 pb-12 border-l border-white/10">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
                <h3 className="text-xl font-bold mb-2">2021: Open Source Release</h3>
                <p className="text-white/80">
                  We released the first version of GitFlow as an open source project. It quickly gained traction in the developer community, with thousands of stars on GitHub and hundreds of contributors.
                </p>
              </div>
              
              <div className="relative pl-8 pb-12 border-l border-white/10">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
                <h3 className="text-xl font-bold mb-2">2022: Enterprise Launch</h3>
                <p className="text-white/80">
                  We launched GitFlow Enterprise to meet the needs of larger organizations. This allowed us to continue investing in the open source project while providing additional features and support for enterprise customers.
                </p>
              </div>
              
              <div className="relative pl-8 pb-12 border-l border-white/10">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
                <h3 className="text-xl font-bold mb-2">2023: Global Expansion</h3>
                <p className="text-white/80">
                  GitFlow expanded globally, opening offices in San Francisco, London, and Singapore. We also launched our cloud offering, making it even easier for teams to get started with GitFlow.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2"></div>
                <h3 className="text-xl font-bold mb-2">2024: Innovation Continues</h3>
                <p className="text-white/80">
                  Today, we're continuing to innovate with new features like AI-powered code reviews, advanced security scanning, and improved performance. We're proud to serve thousands of teams around the world, from small startups to Fortune 500 companies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Co-founder",
                  bio: "Previously led engineering at Docker. Open source enthusiast and conference speaker."
                },
                {
                  name: "Sarah Chen",
                  role: "CTO & Co-founder",
                  bio: "Former Google engineer. Contributed to Kubernetes and other major open source projects."
                },
                {
                  name: "Miguel Rodriguez",
                  role: "VP of Engineering",
                  bio: "Scaling engineering teams for over 15 years. Loves building reliable, performant systems."
                },
                {
                  name: "Priya Sharma",
                  role: "VP of Product",
                  bio: "Product leader with experience at GitHub and GitLab. Passionate about developer experience."
                },
                {
                  name: "David Kim",
                  role: "Head of Security",
                  bio: "Security expert with experience at major financial institutions. Working to make security accessible."
                },
                {
                  name: "Emma Wilson",
                  role: "Head of Customer Success",
                  bio: "Helping teams get the most out of GitFlow. Previously at Atlassian and Microsoft."
                },
                {
                  name: "Omar Hassan",
                  role: "Open Source Lead",
                  bio: "Managing GitFlow's open source community and contributions. Long-time open source contributor."
                },
                {
                  name: "Zoe Taylor",
                  role: "Head of Design",
                  bio: "Creating beautiful and intuitive experiences for developers. Previously at Figma."
                }
              ].map((member, index) => (
                <div key={index} className="p-6 rounded-lg bg-card border border-white/10">
                  <div className="w-16 h-16 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                We're always looking for talented people to join our team. Check out our current openings or send us your resume.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Openness",
                  description: "We believe in transparency and openness, both in our product and our organization. That's why our core platform is open source and we share our roadmap with the community."
                },
                {
                  title: "Empowerment",
                  description: "We build tools that empower developers to do their best work. We believe that by removing friction from the development process, we can help teams ship better software faster."
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from the code we write to the way we support our customers. We believe that by setting high standards for ourselves, we can build a product that delights our users."
                }
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-lg border border-white/10 bg-background">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="p-12 rounded-lg border border-white/10 bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-70"></div>
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-white/80 mb-8">
                  Have questions about GitFlow? We'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Contact Us
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white">
                    Join Community
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

export default About;
