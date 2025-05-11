'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-500 dark:text-neutral-400">
              &copy; {currentYear} Tom Goss. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="/cv.pdf"
              className="text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors"
            >
              CV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
