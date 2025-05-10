import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/api';
import { urlFor } from '@/lib/sanity';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

type WebLink = {
  title?: string;
  url: string;
};

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: any;
  tags?: string[];
  webLinks?: WebLink[];
  body?: any;
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
  const imageUrl = project.mainImage 
    ? urlFor(project.mainImage).width(1200).height(630).url()
    : 'https://tomgoss.dev/images/og-image.jpg';

  return {
    title: `${project.title} | Thomas Goss`,
    description: project.excerpt || 'Project case study by Thomas Goss',
    keywords: project.tags || ['content marketing', 'product marketing', 'project'],
    openGraph: {
      title: project.title,
      description: project.excerpt || 'Project case study by Thomas Goss',
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
      description: project.excerpt || 'Project case study by Thomas Goss',
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

      <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{project.title}</h1>

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.mainImage && (
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {project.excerpt && (
        <div className="text-lg text-neutral-700 mb-8 max-w-3xl">
          {project.excerpt}
        </div>
      )}

      {/* For MVP, show placeholder content if no body content exists */}
      <div className="prose max-w-3xl mx-auto">
        {project.body ? (
          <p>Content coming soon.</p>
        ) : (
          <p>Content coming soon.</p>
        )}
      </div>

      {project.webLinks && project.webLinks.length > 0 && (
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Project Links</h2>
          <ul className="space-y-2">
            {project.webLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title || link.url}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 