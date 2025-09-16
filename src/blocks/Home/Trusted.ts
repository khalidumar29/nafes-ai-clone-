import type { Block } from 'payload'

export const Trusted: Block = {
  slug: 'trusted',
  labels: {
    singular: 'Trusted Section',
    plural: 'Trusted Sections',
  },
  fields: [
    {
      name: 'introText',
      type: 'text',
      label: 'Intro Text',
      required: true,
      defaultValue: 'Trusted by the top organizations',
    },
    {
      name: 'companyLogos',
      type: 'array',
      label: 'Company Logos',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Let AI help you outpace your competitors',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Cards',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
  ],
}
