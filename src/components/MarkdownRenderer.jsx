import React from 'react';

/**
 * MarkdownRenderer Component
 * Renders markdown content as styled React components
 */
export const MarkdownRenderer = ({ content }) => {
  if (!content) {
    return <p className="text-gray-600 dark:text-gray-400">No content available</p>;
  }

  const paragraphs = content.split('\n\n').filter(p => p.trim());
  const elements = [];
  let codeBlockBuffer = null;
  let inCodeBlock = false;
  let codeBlockIdx = 0;

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    const trimmed = paragraph.trim();

    // Handle code blocks
    if (trimmed.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        const lang = trimmed.slice(3).trim();
        codeBlockBuffer = { language: lang || 'text', code: '', startIdx: elements.length };
        codeBlockIdx = elements.length;
      } else {
        inCodeBlock = false;
        if (codeBlockBuffer) {
          elements.push(
            <div key={`code-${codeBlockIdx}`} className="bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
              <pre className="font-mono text-sm"><code>{codeBlockBuffer.code}</code></pre>
            </div>
          );
          codeBlockBuffer = null;
        }
      }
      continue;
    }

    if (inCodeBlock && codeBlockBuffer) {
      codeBlockBuffer.code += trimmed + '\n';
      continue;
    }

    const key = `elem-${elements.length}`;

    // Handle headings with IDs
    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3).split('{#')[0].trim();
      const id = trimmed.match(/{#(.+?)}/)?.[1];
      elements.push(
        <h2 key={key} id={id} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 scroll-mt-20">
          {text}
        </h2>
      );
      continue;
    }

    if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4).split('{#')[0].trim();
      const id = trimmed.match(/{#(.+?)}/)?.[1];
      elements.push(
        <h3 key={key} id={id} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3 scroll-mt-20">
          {text}
        </h3>
      );
      continue;
    }

    if (trimmed.startsWith('# ')) {
      elements.push(
        <h1 key={key} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
          {trimmed.slice(2)}
        </h1>
      );
      continue;
    }

    // Handle blockquotes
    if (trimmed.startsWith('> ')) {
      const quoteText = trimmed.slice(2);
      elements.push(
        <blockquote key={key} className="border-l-4 border-primary-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
          {quoteText}
        </blockquote>
      );
      continue;
    }

    // Handle bullet lists
    if (trimmed.startsWith('- ')) {
      const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
      elements.push(
        <ul key={key} className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
          {items.map((item, idx) => (
            <li key={idx}>{item.trim().slice(2)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Handle numbered lists
    if (/^\d+\.\s/.test(trimmed)) {
      const items = paragraph.split('\n').filter(line => /^\d+\.\s/.test(line.trim()));
      elements.push(
        <ol key={key} className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
          {items.map((item, idx) => (
            <li key={idx}>{item.trim().replace(/^\d+\.\s/, '')}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Handle horizontal rules
    if (trimmed === '---' || trimmed === '***') {
      elements.push(<hr key={key} className="my-8 border-gray-300 dark:border-gray-700" />);
      continue;
    }

    // Regular paragraphs
    if (trimmed) {
      elements.push(
        <p key={key} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    }
  }

  return <div className="space-y-4">{elements}</div>;
};

export default MarkdownRenderer;
