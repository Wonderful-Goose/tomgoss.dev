import { defineField, defineType } from 'sanity'

/**
 * Project schema for portfolio items
 * Includes fields for both list preview and detailed view
 */
export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    // Basic Info
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Personal Project', value: 'personal' },
          { title: 'Client Project', value: 'client' },
          { title: 'Newsletter', value: 'newsletter' },
          { title: 'Article', value: 'article' },
          { title: 'Social Media', value: 'social' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),

    // Preview/List View Fields
    defineField({
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      description: 'Image shown in the projects list (aspect ratio: 16:9 recommended)',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'previewDescription',
      title: 'Preview Description',
      type: 'text',
      description: 'Short description shown in the projects list (max 200 characters)',
      validation: Rule => Rule.max(200),
    }),

    // Detail View Fields
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image shown at the top of the project detail page',
      options: {
        hotspot: true,
      },
    }),
    // Legacy mainImage field (keeping for compatibility)
    defineField({
      name: 'mainImage',
      title: 'Main Image (Legacy)',
      type: 'image',
      description: 'Legacy main image field - use Featured Image instead for new projects',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project or repository',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Overview of the project (shown at the top of the detail page)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Alternative short description (legacy field)',
    }),
    defineField({
      name: 'motivation',
      title: 'Motivation',
      type: 'text',
      description: 'Why this project was undertaken',
    }),
    defineField({
      name: 'skills',
      title: 'Skills & Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'body',
      title: 'Project Details',
      type: 'array',
      description: 'Detailed description of the project, implementation, challenges, etc.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
    }),

    // Embed Fields
    defineField({
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'URL for embedded content (e.g., Substack, Twitter)',
    }),
    defineField({
      name: 'embedHeight',
      title: 'Embed Height',
      type: 'number',
      description: 'Height in pixels for the embedded content',
    }),
    defineField({
      name: 'fallbackEmbedImage',
      title: 'Fallback Embed Image',
      type: 'image',
      description: 'Image to show if embedded content fails to load',
      options: {
        hotspot: true,
      },
    }),

    // Results and Outcomes
    defineField({
      name: 'results',
      title: 'Results & Outcomes',
      type: 'text',
      description: 'Key results, metrics, or outcomes from the project',
    }),

    // Legacy Fields
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'Client name (if applicable)',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your role in the project',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      description: 'Client testimonial (if applicable)',
    }),
    defineField({
      name: 'projectDate',
      title: 'Project Date',
      type: 'date',
      description:
        'When the project was completed (legacy field - use completionDate for new projects)',
    }),
    defineField({
      name: 'webLinks',
      title: 'Web Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
      description: 'Additional relevant links',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'previewImage',
      projectType: 'projectType',
    },
    prepare({ title, media, projectType }) {
      const typeLabels = {
        personal: 'Personal Project',
        client: 'Client Work',
        newsletter: 'Newsletter',
        article: 'Article',
        social: 'Social Media',
      }
      return {
        title,
        subtitle: typeLabels[projectType as keyof typeof typeLabels],
        media,
      }
    },
  },
})
