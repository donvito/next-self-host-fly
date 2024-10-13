import { NextResponse } from 'next/server';

export const revalidate = 0;

// Static data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful React framework that enables you to build server-side rendered and statically generated web applications using React. It provides a great developer experience with features like automatic code splitting, optimized performance, and easy deployment. Whether you\'re building a simple blog or a complex web application, Next.js offers the tools and flexibility to create fast, scalable, and SEO-friendly websites. Did you know that Next.js was created by Vercel and first released in 2016? Since then, it has become one of the most popular React frameworks, used by companies like Netflix, TikTok, and Twitch.',
    author: 'DonvitoCodes',
    date: '2023-05-01',
    image: 'https://picsum.photos/600'
  },
  {
    id: 2,
    title: 'The Power of TypeScript',
    content: 'TypeScript adds static typing to JavaScript, bringing a new level of robustness and maintainability to your code. With TypeScript, you can catch errors early in the development process, improve code readability, and enhance IDE support. It\'s particularly beneficial for large-scale applications, where it can significantly reduce bugs and improve team collaboration. Learn how TypeScript can supercharge your JavaScript development and make your code more reliable and easier to refactor. Fun fact: TypeScript was developed by Microsoft and is used in many of their projects, including Visual Studio Code. It\'s estimated that using TypeScript can reduce bug density by up to 15%!',
    author: 'DonvitoCodes',
    date: '2023-05-15',
    image: 'https://picsum.photos/600'
  },
  {
    id: 3,
    title: 'Building APIs with Next.js',
    content: 'Next.js provides an easy way to create API routes, allowing you to build full-stack applications with ease. With API routes, you can handle server-side logic, interact with databases, and create RESTful endpoints all within your Next.js project. This seamless integration between frontend and backend makes Next.js an excellent choice for developers looking to build modern web applications. Discover how to leverage Next.js API routes to create powerful, efficient, and scalable APIs for your projects. Did you know that Next.js API routes support serverless functions out of the box? This means you can deploy your APIs without managing server infrastructure, leading to cost savings and improved scalability.',
    author: 'DonvitoCodes',
    date: '2023-06-01',
    image: 'https://picsum.photos/600'
  },
  {
    id: 4,
    title: 'Deploying Next.js with Fly.io',
    content: 'Fly.io is a platform for deploying Next.js apps that offers a seamless experience for developers. With Fly.io, you can easily deploy your Next.js applications globally, ensuring low latency and high availability for users around the world. This platform provides features like automatic SSL, custom domains, and easy scaling options. Learn how to leverage Fly.io\'s powerful infrastructure to deploy your Next.js applications quickly and efficiently, and discover best practices for optimizing your app\'s performance in a production environment. Interestingly, Fly.io uses a unique approach called "edge computing" to run your applications closer to your users, potentially reducing latency by up to 50% compared to traditional cloud hosting.',
    author: 'DonvitoCodes',
    date: '2024-10-13',
    image: 'https://picsum.photos/600'
  },
  {
    id: 5,
    title: 'The Rise of JAMstack',
    content: 'JAMstack, which stands for JavaScript, APIs, and Markup, is revolutionizing web development. This modern architecture pattern focuses on decoupling the frontend from the backend, resulting in faster, more secure, and highly scalable websites. By leveraging static site generators, serverless functions, and content delivery networks, JAMstack sites can achieve incredible performance and developer productivity. Did you know that sites built with JAMstack can be up to 10 times faster than traditional dynamic websites? Explore how JAMstack can transform your web development process and deliver lightning-fast experiences to your users.',
    author: 'DonvitoCodes',
    date: '2024-11-01',
    image: 'https://picsum.photos/600'
  },
  {
    id: 6,
    title: 'Mastering CSS Grid Layout',
    content: 'CSS Grid Layout is a powerful tool for creating complex, responsive layouts with ease. It introduces a two-dimensional grid system to CSS, allowing for more flexible and intuitive design possibilities. With CSS Grid, you can create magazine-style layouts, complex dashboard interfaces, and responsive designs without relying on external frameworks. A fascinating tidbit: CSS Grid was in development for nearly 20 years before being widely adopted by modern browsers in 2017. Learn how to harness the full potential of CSS Grid and revolutionize your approach to web layout design.',
    author: 'DonvitoCodes',
    date: '2024-11-15',
    image: 'https://picsum.photos/600'
  }
];

export async function GET() {
  console.log('API /blogs called at ' + new Date().toISOString());
  return NextResponse.json(blogPosts);
}
