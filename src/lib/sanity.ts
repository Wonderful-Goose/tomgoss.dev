import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Sanity.io client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production', // Use CDN only in production
});

// Image URL builder for Sanity images
const builder = imageUrlBuilder(client);

/**
 * Helper function to generate image URLs from Sanity image objects
 * @param source - Sanity image object
 * @returns URL string for the image
 */
export function urlFor(source: any) {
  return builder.image(source);
} 