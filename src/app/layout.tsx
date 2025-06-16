import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Joshua Christopher Hartawan Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Joshua Christopher Hartawan</h1>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
