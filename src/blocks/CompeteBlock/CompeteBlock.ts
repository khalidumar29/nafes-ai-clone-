import { Block } from 'payload'

export const CompeteBlock: Block = {
  slug: 'trustBy', // A unique identifier for this block
  labels: {
    singular: 'Trusted by Section',
    plural: 'Trusted by Sections',
  },
  fields: [
    {
      name: 'competeImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'overlayText',
      type: 'text',
      label: 'Overlay text',
      required: true,
    },
    {
      name: 'competitorSuggestion',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          label: 'Card Icon',
          relationTo: 'media', // Relates to your media collection
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
          required: true,
        },
      ],
    },
  ],
}
