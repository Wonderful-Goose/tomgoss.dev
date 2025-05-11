import { client } from './sanity';

/**
 * Fetches all projects from Sanity
 * @returns Array of project objects
 */
export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(completionDate desc) {
    _id,
    title,
    "slug": slug.current,
    previewImage {
      asset->{
        _id,
        url
      }
    },
    previewDescription,
    skills,
    projectType,
    completionDate
  }`);
}

/**
 * Fetches a specific project by its slug
 * @param slug - The project's slug identifier
 * @returns The project object with all details
 */
export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      featuredImage,
      projectUrl,
      summary,
      skills,
      motivation,
      body,
      projectType,
      completionDate
    }`,
    { slug }
  );
}

/**
 * Fetches all articles from Sanity
 * @returns Array of article objects
 */
export async function getArticles() {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      tags
    }`,
    {}, // Empty params object
    { cache: 'no-store' } // Disable caching
  );
}

/**
 * Fetches a specific article by its slug
 * @param slug - The article's slug identifier
 * @returns The article object with all details
 */
export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      body,
      tags
    }`,
    { slug },
    { cache: 'no-store' } // Disable caching
  );
} 