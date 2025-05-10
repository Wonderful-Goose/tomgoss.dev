import { client } from './sanity';

/**
 * Fetches all projects from Sanity
 * @returns Array of project objects
 */
export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    tags
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
      excerpt,
      mainImage,
      webLinks,
      body,
      tags
    }`,
    { slug }
  );
}

/**
 * Fetches all articles from Sanity
 * @returns Array of article objects
 */
export async function getArticles() {
  return client.fetch(`*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    tags
  }`);
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
      slug,
      publishedAt,
      excerpt,
      mainImage,
      body,
      tags
    }`,
    { slug }
  );
} 