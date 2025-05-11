"use client";

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

/**
 * ProjectCard component displays a preview of a project 
 * with image, title, description, and skills
 */
type ProjectCardProps = {
  title: string;
  slug: string;
  previewDescription?: string;
  previewImage?: any;
  skills?: string[];
  projectType: string;
};

// Map project types to display labels
const projectTypeLabels: Record<string, string> = {
  personal: 'Personal Project',
  client: 'Client Work',
  newsletter: 'Newsletter',
  article: 'Article',
  social: 'Social Media',
};

export default function ProjectCard({ 
  title, 
  slug, 
  previewDescription, 
  previewImage, 
  skills,
  projectType
}: ProjectCardProps) {
  // Get the display label for the project type, fallback to the raw value if not found
  const projectTypeDisplay = projectTypeLabels[projectType] || projectType;
  
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 transition-all hover:shadow-md"
    >
      <div className="aspect-video relative overflow-hidden bg-neutral-50">
        {previewImage && (
          <Image
            src={urlFor(previewImage).width(800).height(450).url()}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {projectTypeDisplay}
          </span>
        </div>
        {previewDescription && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
            {previewDescription}
          </p>
        )}
        {skills && skills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-xs text-neutral-600 dark:text-neutral-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
} 