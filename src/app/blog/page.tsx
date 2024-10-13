'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        Back to Home
      </Link>
      {blogPosts.map((post) => (
        <article key={post.id} className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
              <Image
                src={post.image || 'https://picsum.photos/600'}
                alt={post.title}
                width={100}
                height={100}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                By {post.author} on {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-800 mb-4">{post.content.slice(0, 200)}...</p>
              <Link href="https://donvitocodes.com" passHref>
                <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </article>
      ))}
      <footer className="mt-8 text-center">
        <a href="https://donvitocodes.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Visit donvitocodes.com
        </a>
      </footer>
    </div>
  );
}
