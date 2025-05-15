
import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, language = 'bash' }) => {
  return (
    <div className={`code-block p-4 rounded-md mb-4 bg-gray-900 ${className}`}>
      <div className="flex items-center mb-2 text-xs text-white/50">
        <span className="px-2 py-0.5 rounded bg-white/10">{language}</span>
      </div>
      <pre className="text-sm text-white/90 font-mono overflow-x-auto whitespace-pre">
        <code>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
