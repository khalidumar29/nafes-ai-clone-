import type { Block } from 'payload'

export const CompeteBetter: Block = {
  slug: 'competeBetter',
  labels: {
    singular: 'Compete Better Section',
    plural: 'Compete Better Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Stay ahead and compete better',
    },
    {
      name: 'dashboardImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Dashboard Image',
    },
    {
      name: 'dashboardNote',
      type: 'textarea',
      label: 'Dashboard Note',
      defaultValue:
        'Explore our innovative features for an easy, enjoyable browsing experience with a simple interface and a wide range of services at your fingertips',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Icon',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
        },
      ],
    },
  ],
}
