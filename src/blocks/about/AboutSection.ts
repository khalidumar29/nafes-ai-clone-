import { Block } from 'payload'

export const AboutSection: Block = {
  slug: 'aboutSection',
  labels: {
    singular: 'About Section',
    plural: 'About Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Main Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Items (Vision, Mission, Values)',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
