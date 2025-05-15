
import React from 'react';
import { ArrowRight, Book, Server, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularTopics = () => {
  const topics = [
    {
      title: "Repository Management",
      description: "Learn how to create, manage, and organize your Git repositories.",
      link: "#repositories",
      icon: Book,
    },
    {
      title: "Pipeline Configuration",
      description: "Configure your CI/CD pipelines for automated builds and deployments.",
      link: "#pipelines",
      icon: Server,
    },
    {
      title: "Deployment Strategies",
      description: "Learn about various deployment strategies and how to implement them.",
      link: "#deployment",
      icon: Rocket,
    },
    {
      title: "Security Best Practices",
      description: "Secure your code and pipelines with our security best practices.",
      link: "#security",
      icon: Shield,
    },
  ];

  return (
    <div className="mt-12 mb-16">
      <h3 className="text-xl font-bold mb-6">Popular Documentation Topics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <Link 
            key={index}
            to={topic.link} 
            className="p-6 rounded-lg border border-white/10 bg-card hover:border-primary/40 transition-all group relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <div className="bg-white/5 p-3 rounded-md group-hover:bg-primary/20 transition-colors">
                <topic.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{topic.title}</h4>
                <p className="text-white/70">{topic.description}</p>
              </div>
            </div>
            <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-white/30 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;
