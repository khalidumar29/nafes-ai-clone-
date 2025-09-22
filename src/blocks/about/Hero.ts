import { Block } from 'payload'

export const AboutHero: Block = {
  slug: 'aboutHero',
  labels: {
    singular: 'About Hero Section',
    plural: 'About Hero Sections',
  },
  fields: [
    {
      name: 'mainTitleLines',
      type: 'array',
      label: 'Main Title Lines',
      required: false,
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: false,
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
    {
      name: 'secondaryTitle',
      type: 'text',
      label: 'Secondary Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Start Now',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Button Link',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Right Side Image',
      required: true,
    },
  ],
}
