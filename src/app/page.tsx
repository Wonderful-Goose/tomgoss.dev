import Link from 'next/link'
import ProjectCard from '@/components/ui/ProjectCard'
import ArticleCard from '@/components/ui/ArticleCard'
import HeroSection from '@/components/sections/HeroSection'
import { getProjects, getArticles } from '@/lib/api'

// Define types for our data
type Project = {
  _id: string
  title: string
  slug: string
  projectType: string
  excerpt?: string
  previewImage?: any
  tags?: string[]
}

type Article = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  mainImage?: any
}

export default async function HomePage() {
  // Fetch data - will show placeholders if fetching fails
  let projects: Project[] = []
  let articles: Article[] = []

  try {
    projects = await getProjects()
    articles = await getArticles()
  } catch (error) {
    console.error('Error fetching content:', error)
  }

  // Take only the first 2 projects and 3 articles for featured sections
  const featuredProjects = projects.slice(0, 2)
  const latestArticles = articles.slice(0, 3)

  return (
    <div className="space-y-20 py-10 md:py-16">
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Link href="/projects" className="text-neutral-900 dark:text-white hover:underline">
            View All
          </Link>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project: Project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                slug={project.slug}
                projectType={project.projectType}
                previewDescription={project.excerpt}
                previewImage={project.previewImage}
                skills={project.tags}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Projects coming soon. Check back later!
            </p>
          </div>
        )}
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-4 pb-10">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
          <Link href="/articles" className="text-neutral-900 dark:text-white hover:underline">
            View All
          </Link>
        </div>

        {latestArticles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article: Article) => (
              <ArticleCard
                key={article._id}
                title={article.title}
                slug={article.slug}
                publishedAt={article.publishedAt}
                excerpt={article.excerpt}
                mainImage={article.mainImage}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 dark:border-neutral-700 p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Articles coming soon. Check back later!
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
