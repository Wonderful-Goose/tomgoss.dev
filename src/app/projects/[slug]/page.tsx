import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/api';
import { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  featuredImage?: any;
  projectUrl?: string;
  summary: string;
  skills?: string[];
  motivation?: string;
  body?: any;
  projectType: string;
  completionDate?: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Thomas Goss',
      description: 'The requested project could not be found.',
    };
  }

  // Get the image URL or use the default OG image
  const imageUrl = project.featuredImage 
    ? urlFor(project.featuredImage).width(1200).height(630).url()
    : 'https://tomgoss.dev/images/og-image.jpg';

  return {
    title: `${project.title} | Thomas Goss`,
    description: project.summary || 'Project case study by Thomas Goss',
    keywords: project.skills || ['content marketing', 'product marketing', 'project'],
    openGraph: {
      title: project.title,
      description: project.summary || 'Project case study by Thomas Goss',
      type: 'article',
      url: `https://tomgoss.dev/projects/${params.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary || 'Project case study by Thomas Goss',
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project: Project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">{project.title}</h1>
        <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-lg">
          {project.projectType === 'personal' ? 'Personal Project' :
           project.projectType === 'client' ? 'Client Work' :
           project.projectType === 'professional' ? 'Professional Work' :
           'Open Source'}
        </span>
      </div>

      {project.skills && project.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {project.featuredImage && (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={urlFor(project.featuredImage).url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {project.projectUrl && (
        <div className="mb-8">
          <Link
            href={project.projectUrl}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Project
          </Link>
        </div>
      )}

      <div className="prose max-w-3xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-neutral-700">{project.summary}</p>
        </div>

        {project.motivation && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
            <p className="text-neutral-700">{project.motivation}</p>
          </div>
        )}

        {project.body && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <div className="prose prose-neutral max-w-none">
              <PortableText value={project.body} />
            </div>
          </div>
        )}
      </div>

      {project.completionDate && (
        <div className="mt-12 text-sm text-neutral-500">
          Completed: {new Date(project.completionDate).toLocaleDateString('en-US', { 
            year: 'numeric',
            month: 'long'
          })}
        </div>
      )}
    </div>
  );
} 