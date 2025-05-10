"use client";

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { formatDate } from '@/utils/date';

/**
 * ArticleCard component displays a preview of an article
 * with image, title, date, and description
 */
type ArticleCardProps = {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: any;
};

export default function ArticleCard({ 
  title, 
  slug, 
  publishedAt, 
  excerpt, 
  mainImage 
}: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${slug.current}`}
      className="group block overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all hover:shadow-md"
    >
      {mainImage ? (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={urlFor(mainImage).url()}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative h-48 w-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <span className="text-neutral-400 dark:text-neutral-500">No image</span>
        </div>
      )}
      <div className="p-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{formatDate(publishedAt)}</p>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        {excerpt && <p className="mt-2 text-neutral-600 dark:text-neutral-400">{excerpt}</p>}
      </div>
    </Link>
  );
} 