
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">About Zenith Threads</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We're more than just a clothing brand. We're a community of creators, dreamers, and storytellers.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Zenith Threads was born from a simple idea: that a t-shirt could be a powerful medium for expression. Founded in a small studio by a group of friends passionate about design and quality, we set out to create apparel that wasn't just worn, but lived in. We were tired of fast fashion and generic designs. We wanted to build something with soul.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every design we create has a story, every material is chosen with care, and every garment is produced with respect for the people who make it and the planet we share. Zenith represents the peak, the highest point—and we strive to bring that level of quality and intention to everything we do.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://picsum.photos/id/1074/600/500" alt="Our team" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold font-serif text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-6.364-1.636l.707-.707" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creativity</h3>
              <p className="text-gray-600">We celebrate originality and artistic expression in every design, aiming to create unique pieces that inspire.</p>
            </div>
            <div className="p-6">
               <div className="inline-block p-4 bg-green-100 text-green-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality & Craft</h3>
              <p className="text-gray-600">We are committed to using premium, durable materials and ethical production methods to ensure our products last.</p>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We aim to build a diverse and inclusive community, connected by a shared love for art, design, and self-expression.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
