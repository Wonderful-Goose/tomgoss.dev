import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/api'
import { urlFor } from '@/lib/sanity'
import { formatDate } from '@/utils/date'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

type Article = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: any
  body?: any
  tags?: string[]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found | Thomas Goss',
      description: 'The requested article could not be found.',
    }
  }

  // Get the image URL or use the default OG image
  const imageUrl = article.mainImage
    ? urlFor(article.mainImage).width(1200).height(630).url()
    : 'https://tomgoss.dev/images/og-image.jpg'

  return {
    title: `${article.title} | Thomas Goss`,
    description: article.excerpt || 'Article by Thomas Goss',
    keywords: article.tags || ['content marketing', 'product marketing', 'writing'],
    openGraph: {
      title: article.title,
      description: article.excerpt || 'Article by Thomas Goss',
      type: 'article',
      url: `https://tomgoss.dev/articles/${params.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || 'Article by Thomas Goss',
      images: [imageUrl],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <Link href="/articles" className="inline-flex items-center text-primary hover:underline mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Articles
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{article.title}</h1>

          {article.publishedAt && (
            <p className="text-neutral-500">{formatDate(article.publishedAt)}</p>
          )}
        </header>

        {article.mainImage && (
          <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={urlFor(article.mainImage).url()}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {article.excerpt && (
          <div className="text-lg text-neutral-700 mb-8 font-medium">{article.excerpt}</div>
        )}

        <div className="prose prose-neutral max-w-none">
          {article.body ? (
            <PortableText value={article.body} />
          ) : (
            <p className="text-neutral-500 italic">This article has no content yet.</p>
          )}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">Topics</h2>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
