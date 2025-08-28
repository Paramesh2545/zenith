
import React from 'react';

interface LegalPageProps {
  title: string;
  content: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-8">{title}</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            {content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-6 mb-3">{paragraph.slice(2, -2)}</h2>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
