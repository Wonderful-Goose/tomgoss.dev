import ProjectCard from '@/components/ui/ProjectCard'
import { getProjects } from '@/lib/api'
import type { Metadata } from 'next'

// Define the project type based on the ProjectCard component props
type Project = {
  _id: string
  title: string
  slug: string
  previewDescription?: string
  previewImage?: any
  skills?: string[]
  projectType: string
}

export const metadata: Metadata = {
  title: 'Projects | Thomas Goss',
  description:
    'Explore content marketing, product marketing, and AI application projects by Thomas Goss.',
  keywords: ['projects', 'portfolio', 'content marketing', 'product marketing', 'AI applications'],
  openGraph: {
    title: 'Projects | Thomas Goss',
    description:
      'Explore content marketing, product marketing, and AI application projects by Thomas Goss.',
    url: 'https://tomgoss.dev/projects',
    siteName: 'Thomas Goss',
    images: [
      {
        url: 'https://tomgoss.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Goss Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Thomas Goss',
    description:
      'Explore content marketing, product marketing, and AI application projects by Thomas Goss.',
    images: ['https://tomgoss.dev/images/og-image.jpg'],
  },
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Projects</h1>
      <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
        A collection of my work in content marketing, product marketing, and AI applications.
      </p>

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-neutral-200 p-8 text-center">
          <p className="text-neutral-600">Projects coming soon. Check back later!</p>
        </div>
      )}
    </div>
  )
}
