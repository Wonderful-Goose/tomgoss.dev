import Link from 'next/link'

export default function ProjectNotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Project Not Found</h1>
      <p className="text-lg text-neutral-600 mb-8">
        The project you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
      >
        View All Projects
      </Link>
    </div>
  )
}
