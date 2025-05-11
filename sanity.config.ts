import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/lib/schemas';

export default defineConfig({
  name: 'default',
  title: 'tomgoss.dev',
  
  projectId: 'su9ynij6',
  dataset: 'production',
  
  basePath: '/studio', // This enables the embedded studio at /studio

  plugins: [
    deskTool(),
    visionTool(), // Adds the JSON preview pane
  ],

  schema: {
    types: schemaTypes,
  },
}); 