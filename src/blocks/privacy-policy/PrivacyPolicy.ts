import { Block } from 'payload'

export const PrivacyPolicy: Block = {
  slug: 'privacyPolicy',
  labels: {
    singular: 'Privacy Policy Full Page',
    plural: 'Privacy Policy Full Pages',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'Privacy Policy',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Policy Sections',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          required: true,
          admin: {
            description: 'e.g., "Introduction" or "Information We Collect".',
          },
        },
        {
          name: 'content',
          type: 'richText', // Use richText for flexible content like paragraphs, lists, etc.
          label: 'Section Content',
          required: true,
        },
      ],
    },
  ],
}
