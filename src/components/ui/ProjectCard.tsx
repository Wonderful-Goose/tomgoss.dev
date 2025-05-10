"use client";

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

/**
 * ProjectCard component displays a preview of a project 
 * with image, title, description, and tags
 */
type ProjectCardProps = {
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  tags?: string[];
};

export default function ProjectCard({ 
  title, 
  slug, 
  excerpt, 
  mainImage, 
  tags 
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug.current}`}
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
        <h3 className="text-lg font-semibold">{title}</h3>
        {excerpt && <p className="mt-2 text-neutral-600 dark:text-neutral-400">{excerpt}</p>}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
} 