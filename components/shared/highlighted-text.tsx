'use client';

interface HighlightedTextProps {
  text?: string;
  keywords?: string[];
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function HighlightedText({ text = '', keywords = [] }: HighlightedTextProps) {
  if (!text.length || keywords.length === 0) {
    return <>{text}</>;
  }

  const pattern = keywords.map(escapeRegExp).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isMatch = keywords.some((keyword) => part.toLowerCase() === keyword.toLowerCase());

    return isMatch ? (
      <mark
        key={`highlight-${index}`}
        className="bg-yellow-200 dark:bg-yellow-600 text-gray-900 dark:text-white px-1 rounded font-semibold animate-pulse"
      >
        {part}
      </mark>
    ) : (
      <span key={`text-${index}`}>{part}</span>
    );
  });
}
