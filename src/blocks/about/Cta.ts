import { Block } from 'payload'

export const CtaSection: Block = {
  slug: 'ctaSection',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      required: true,
      admin: {
        description: 'The main headline for the section.',
      },
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
      required: true,
      defaultValue: 'Start Now',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Button Link',
      admin: {
        description: 'The URL the button should link to. (e.g., /contact)',
      },
    },
  ],
}
