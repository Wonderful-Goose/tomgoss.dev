'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(
    null
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      // For MVP, we'll use a mailto link as fallback
      // This is where you would normally send the form data to a backend service
      // like Formspree or Netlify Forms

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // For now, just show success message and reset form
      setSubmitResult({
        success: true,
        message: "Thanks for your message! I'll get back to you soon.",
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Something went wrong. Please try again or email me directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ]

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Get In Touch</h1>
      <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
        Have a question or want to work together? Fill out the form below or reach out via email or
        social media.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitResult && (
              <div
                className={`p-4 rounded-lg ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
              >
                {submitResult.message}
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-neutral-600 mb-4">
              Prefer email? Reach me directly at:{' '}
              <a href="mailto:hello@tomgoss.dev" className="text-primary hover:underline">
                hello@tomgoss.dev
              </a>
            </p>
          </div>
        </div>

        {/* Connect Section */}
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Connect With Me</h2>

          <ul className="space-y-4">
            {socialLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="inline-flex items-center text-neutral-700 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 mr-3">
                    {/* Simple placeholder for social icons */}
                    {link.icon.charAt(0).toUpperCase()}
                  </span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Looking for my CV?</h3>
            <p className="text-neutral-600 mb-4">
              Download my full curriculum vitae to learn more about my experience and skills.
            </p>
            <Link
              href="/cv.pdf"
              className="inline-flex items-center text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
