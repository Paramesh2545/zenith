
import React, { useState } from 'react';
import { FAQS } from '../constants';
import type { FaqItem } from '../types';

const FaqAccordionItem: React.FC<{ item: FaqItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <h2>
                <button
                    type="button"
                    className="flex justify-between items-center w-full py-5 font-medium text-left text-gray-700"
                    onClick={onClick}
                    aria-expanded={isOpen}
                >
                    <span>{item.question}</span>
                    <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
            </h2>
            {isOpen && (
                <div className="py-5">
                    <p className="text-gray-500 leading-relaxed">{item.answer}</p>
                </div>
            )}
        </div>
    );
};


const FaqPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-serif text-gray-900">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            {FAQS.map((faq, index) => (
                <FaqAccordionItem
                    key={index}
                    item={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FaqPage;
