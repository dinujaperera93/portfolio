'use client';

interface HighlightedTextProps {
  text?: string;
  keywords?: string[];
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function createKeywordPattern(keyword: string) {
  return `\\b${escapeRegExp(keyword)}\\b`;
}

function getMatchedKeyword(part: string, keywords: string[]) {
  return (
    keywords.find((keyword) => {
      const keywordRegex = new RegExp(`^${createKeywordPattern(keyword)}$`, 'i');

      return keywordRegex.test(part);
    }) ?? null
  );
}

export default function HighlightedText({ text = '', keywords = [] }: HighlightedTextProps) {
  if (!text.length || keywords.length === 0) {
    return <>{text}</>;
  }

  const pattern = keywords.map(createKeywordPattern).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const matchedKeyword = getMatchedKeyword(part, keywords);

    return matchedKeyword ? (
      <mark
        key={`highlight-${index}`}
        data-highlight-keyword={matchedKeyword.toLowerCase()}
        className="bg-yellow-200 dark:bg-yellow-600 text-gray-900 dark:text-white px-1 rounded font-semibold animate-pulse"
      >
        {part}
      </mark>
    ) : (
      <span key={`text-${index}`}>{part}</span>
    );
  });
}
