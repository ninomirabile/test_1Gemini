
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre className="bg-slate-800 rounded-lg p-4 my-2 text-sm text-slate-300 overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
