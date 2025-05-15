
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary text-glow">Simple</span> pricing for<br /> 
              every team
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Choose the right plan for your team and start shipping faster.
            </p>
            
            <div className="flex justify-center items-center space-x-2 mb-12">
              <span className="text-sm font-medium text-white/80">Monthly</span>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out">
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
              <span className="text-sm font-medium text-white">Annual <span className="text-xs text-primary">Save 20%</span></span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="rounded-lg border border-white/10 bg-card p-8 hover:border-primary/40 transition-all">
                <h3 className="text-lg font-medium text-white mb-2">Free</h3>
                <p className="text-white/60 mb-6">For individuals and small projects</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-white/60 ml-2">/ month</span>
                </div>
                <Button className="w-full bg-secondary/20 hover:bg-secondary/30 text-white mb-8">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {[
                    "Up to 3 users",
                    "5 private repositories",
                    "Basic CI/CD pipeline",
                    "500 pipeline minutes / month",
                    "1GB artifact storage",
                    "Community support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro Plan */}
              <div className="rounded-lg border border-primary bg-card p-8 relative">
                <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Pro</h3>
                <p className="text-white/60 mb-6">For growing teams and businesses</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-white/60 ml-2">/ month per user</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-8">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {[
                    "Unlimited users",
                    "Unlimited private repositories",
                    "Advanced CI/CD pipelines",
                    "2,000 pipeline minutes / month / user",
                    "10GB artifact storage / user",
                    "Priority support",
                    "Advanced security scanning",
                    "Custom domain",
                    "Merge approvals and controls"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise Plan */}
              <div className="rounded-lg border border-white/10 bg-card p-8 hover:border-primary/40 transition-all">
                <h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
                <p className="text-white/60 mb-6">For large organizations with custom needs</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">Custom</span>
                  <span className="text-white/60 ml-2">pricing</span>
                </div>
                <Button className="w-full bg-secondary/20 hover:bg-secondary/30 text-white mb-8">
                  Contact Sales
                </Button>
                <ul className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Unlimited pipeline minutes",
                    "Unlimited artifact storage",
                    "24/7 premium support",
                    "SSO and SAML integration",
                    "Dedicated success manager",
                    "Custom SLA",
                    "Advanced compliance features",
                    "On-premise deployment option"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-primary text-glow">Detailed</span> plan comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Free</th>
                    <th className="p-4 text-center">Pro</th>
                    <th className="p-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Users", free: "Up to 3", pro: "Unlimited", enterprise: "Unlimited" },
                    { name: "Private repositories", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
                    { name: "Pipeline minutes", free: "500 / month", pro: "2,000 / month / user", enterprise: "Unlimited" },
                    { name: "Artifact storage", free: "1GB", pro: "10GB / user", enterprise: "Unlimited" },
                    { name: "Branch protection rules", free: "Basic", pro: "Advanced", enterprise: "Custom" },
                    { name: "Self-hosted runners", free: "1", pro: "10", enterprise: "Unlimited" },
                    { name: "Security scanning", free: "Basic", pro: "Advanced", enterprise: "Enterprise-grade" },
                    { name: "SAML SSO", free: "❌", pro: "❌", enterprise: "✅" },
                    { name: "Audit logs", free: "7 days", pro: "30 days", enterprise: "2 years" },
                    { name: "Priority support", free: "❌", pro: "✅", enterprise: "24/7 Premium" },
                    { name: "IP allow lists", free: "❌", pro: "❌", enterprise: "✅" },
                    { name: "Custom domains", free: "❌", pro: "✅", enterprise: "✅" },
                    { name: "API access", free: "Limited", pro: "Full", enterprise: "Custom" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="p-4 text-white/80">{row.name}</td>
                      <td className="p-4 text-center text-white/80">{row.free}</td>
                      <td className="p-4 text-center text-white/80">{row.pro}</td>
                      <td className="p-4 text-center text-white/80">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-primary text-glow">Questions</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: "Can I upgrade or downgrade my plan at any time?",
                  answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. If you downgrade, your new plan will take effect at the end of your current billing cycle."
                },
                {
                  question: "Do you offer discounts for startups or educational institutions?",
                  answer: "Yes, we offer special pricing for qualified startups, non-profits, and educational institutions. Please contact our sales team for more information."
                },
                {
                  question: "How do pipeline minutes work?",
                  answer: "Pipeline minutes are consumed when your CI/CD jobs run. The number of minutes used depends on the complexity of your jobs and the resources allocated to them."
                },
                {
                  question: "What happens if I exceed my plan limits?",
                  answer: "If you exceed your plan limits, you can purchase additional resources as needed. We'll notify you when you're approaching your limits so you can plan accordingly."
                },
                {
                  question: "Can I host GitFlow on my own infrastructure?",
                  answer: "Yes, GitFlow Enterprise can be deployed on your own infrastructure. Contact our sales team for more information about on-premise deployment options."
                },
              ].map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-6 bg-card">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="p-12 rounded-lg border border-white/10 bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-70"></div>
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to get started with GitFlow?</h2>
                <p className="text-white/80 mb-8">
                  Join thousands of teams that ship better code, faster with GitFlow.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
