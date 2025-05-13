import ArticleCard from '@/components/ui/ArticleCard'
import { getArticles } from '@/lib/api'
import type { Metadata } from 'next'

// Define the article type based on the ArticleCard component props
type Article = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: any
  tags?: string[]
}

export const metadata: Metadata = {
  title: 'Articles | Thomas Goss',
  description:
    'Read the latest articles on content marketing, product marketing, and AI applications by Thomas Goss.',
  keywords: ['articles', 'blog', 'content marketing', 'product marketing', 'AI applications'],
  openGraph: {
    title: 'Articles | Thomas Goss',
    description:
      'Read the latest articles on content marketing, product marketing, and AI applications by Thomas Goss.',
    url: 'https://tomgoss.dev/articles',
    siteName: 'Thomas Goss',
    images: [
      {
        url: 'https://tomgoss.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Goss Articles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | Thomas Goss',
    description:
      'Read the latest articles on content marketing, product marketing, and AI applications by Thomas Goss.',
    images: ['https://tomgoss.dev/images/og-image.jpg'],
  },
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Articles</h1>
      <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
        Thoughts, insights, and guides on content marketing, product marketing, and AI applications.
      </p>

      {articles.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article: Article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              slug={article.slug.current}
              publishedAt={article.publishedAt}
              excerpt={article.excerpt}
              mainImage={article.mainImage}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-neutral-200 p-8 text-center">
          <p className="text-neutral-600">Articles coming soon. Check back later!</p>
        </div>
      )}
    </div>
  )
}
