// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { createClient } from '@sanity/client'
import { client } from './client'
import { ReactNode } from 'react'

// Configure the client for fetching
export const { fetch: sanityFetch } = createClient({
  ...client.config(),
  apiVersion: '2024-03-13',
  perspective: 'published',
  useCdn: false,
})

interface SanityLiveProps {
  children: ReactNode
}

// Temporarily export a dummy component until live preview is properly configured
export const SanityLive = ({ children }: SanityLiveProps): ReactNode => {
  return children
}
