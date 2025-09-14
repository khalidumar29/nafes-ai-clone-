import { GlobalConfig } from 'payload'

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group', // Group related fields together
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title', // For "Recent Articles from Our Blog"
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea', // For the descriptive paragraph
          required: true,
          label: 'Description',
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
      ],
    },
    {
      name: 'featuredPost',
      type: 'relationship', // This is the key field!
      relationTo: 'posts', // Links to your 'posts' collection
      hasMany: false,
      required: true,
      label: 'Featured Post',
      admin: {
        description: 'Select one post to feature at the top of the page.',
      },
    },
    {
      name: 'moreArticlesTitle',
      type: 'text',
      required: true,
      defaultValue: 'More Articles', // For the "More Articles" heading
      label: 'More Articles Section Title',
      localized: true,
    },
    {
      name: 'featurePostButtonText',
      type: 'text',
      required: true,
      defaultValue: 'Continue Reading', // For the button text
      label: 'Featured Post Button Text',
      localized: true,
    },
  ],
}
