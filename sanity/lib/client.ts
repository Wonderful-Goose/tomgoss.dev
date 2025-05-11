import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // We'll set this to false to ensure we get the latest content
  studioUrl: '/studio',
  perspective: 'published',
})
