
import React from 'react';

const PopularTopics = () => {
  const topics = [
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
  ];

  return (
    <div className="mt-12 mb-16">
      <h3 className="text-xl font-bold mb-6">Popular Documentation Topics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
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
  );
};

export default PopularTopics;
