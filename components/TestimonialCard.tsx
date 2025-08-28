
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-900">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
