
import React, { useState } from 'react';
import Button from '../components/Button';
import { TwitterIcon, InstagramIcon, FacebookIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold font-serif">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-600">Your message has been sent. We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold font-serif text-gray-900">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-600">
              Have a question, a comment, or just want to say hello? We'd love to hear from you. Fill out the form or use our contact details below.
            </p>
            <div className="mt-12 space-y-6 text-gray-700">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>hello@zeniththreads.com</span>
              </p>
               <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Design St, Creativity City, 90210</span>
              </p>
            </div>
            <div className="mt-8 flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-900"><TwitterIcon className="h-6 w-6" /></a>
                <a href="#" className="text-gray-500 hover:text-gray-900"><InstagramIcon className="h-6 w-6" /></a>
                <a href="#" className="text-gray-500 hover:text-gray-900"><FacebookIcon className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
