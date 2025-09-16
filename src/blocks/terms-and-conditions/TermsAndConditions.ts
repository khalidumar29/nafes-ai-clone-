import { Block } from 'payload'

export const TermsAndConditions: Block = {
  slug: 'termsAndConditions',
  labels: {
    singular: 'Terms and Conditions Full Page',
    plural: 'Terms and Conditions Full Pages',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'Nafes Platform Terms and Conditions',
    },
    {
      name: 'introduction',
      type: 'richText',
      label: 'Introduction Content',
      admin: {
        description: 'The introductory paragraphs before the numbered sections begin.',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Content Sections',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          required: true,
          admin: {
            description: 'Example: "1. Subscriptions" or "2. Nafes Responsibilities"',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Section Content',
          required: true,
        },
      ],
    },
  ],
}
