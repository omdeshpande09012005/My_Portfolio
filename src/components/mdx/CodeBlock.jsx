/**
 * CodeBlock Component
 * Syntax-highlighted code block with copy button for MDX
 */

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CodeBlock = ({ children, className = '', language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);
  const code = typeof children === 'string' ? children : children?.props?.children || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
      {/* Language Label */}
      <div className="px-4 py-2 bg-gray-800 text-gray-300 text-sm font-mono border-b border-gray-700">
        {language}
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-12 right-4 z-10 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
        title="Copy code"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <Check size={18} className="text-green-400" />
        ) : (
          <Copy size={18} className="text-gray-300" />
        )}
      </button>

      {/* Code Content */}
      <pre className="overflow-x-auto p-4 text-gray-100">
        <code className={`font-mono text-sm ${className}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
