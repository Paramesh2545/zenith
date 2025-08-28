
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-serif text-gray-900">From the Journal</h1>
          <p className="mt-4 text-lg text-gray-600">
            Style guides, brand stories, and a look behind the scenes at Zenith Threads.
          </p>
        </div>

        <div className="mt-16 grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <Link to="#" className="hover:underline">
                      Article
                    </Link>
                  </p>
                  <Link to="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                      <span className="sr-only">{post.author}</span>
                      <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/40?u=${post.author}`} alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
