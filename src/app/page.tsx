import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-3xl mx-auto">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-center sm:text-left">
          This is a <a href="https://nextjs.org" className="text-blue-500 hover:underline">Next.js</a> example project bootstrapped with <a href="https://nextjs.org/docs/app/api-reference/cli/create-next-app" className="text-blue-500 hover:underline">create-next-app</a> and deployed to <a href="https://fly.io" className="text-blue-500 hover:underline">Fly.io</a>.
        </p>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">Deploy to Fly.io</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Install the Fly CLI:
              <pre className="bg-gray-100 p-3 mt-2 rounded-lg overflow-x-auto"><code>brew install flyctl</code></pre>
            </li>
            <li>Launch the app to create a deployment configuration fly.toml:
              <pre className="bg-gray-100 p-3 mt-2 rounded-lg overflow-x-auto"><code>fly launch</code></pre>
            </li>
            <li>For succeeding deployments, use the following command:
              <pre className="bg-gray-100 p-3 mt-2 rounded-lg overflow-x-auto"><code>fly deploy</code></pre>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-8 mb-4">Source Code</h2>
          <p>To test the API functionality, I added an API here:</p>
          <pre className="bg-gray-100 p-3 mt-2 rounded-lg overflow-x-auto"><code>/src/app/api/blogs/route.ts</code></pre>
          <p className="mt-4">Then I added a page to call the API:</p>
          <pre className="bg-gray-100 p-3 mt-2 rounded-lg overflow-x-auto"><code>/src/app/blog/page.tsx</code></pre>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <Link
            className="rounded-full bg-black text-white hover:bg-gray-800 transition-colors flex items-center justify-center text-sm sm:text-base py-2 px-6"
            href="/blog"
          >
            View Blog
          </Link>
          <a
            className="rounded-full border border-black hover:bg-gray-100 transition-colors flex items-center justify-center text-sm sm:text-base py-2 px-6"
            href="/api/blogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View API
          </a>
        </div>
      </main>
      <footer className="mt-16 text-center">
        <Link href="https://donvitocodes.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Visit donvitocodes.com
        </Link>
      </footer>
    </div>
  );
}
