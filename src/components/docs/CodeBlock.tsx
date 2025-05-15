
import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  return (
    <div className={`code-block p-4 rounded-md mb-4 ${className}`}>
      <pre className="text-sm text-white/90 font-mono overflow-x-auto">
        <code>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
