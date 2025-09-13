import { Block } from 'payload'

export const AboutHero: Block = {
  slug: 'aboutHero',
  labels: {
    singular: 'About Hero',
    plural: 'About Heroes',
  },
  fields: [
    {
      name: 'titleLines',
      type: 'array',
      label: 'Title Lines',
      required: true,
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'isGradient',
          type: 'checkbox',
          label: 'Apply Gradient?',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'companies',
      type: 'array',
      label: 'Company Logos',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
