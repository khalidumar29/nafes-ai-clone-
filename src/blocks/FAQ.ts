import { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faqBlock',
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
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
          name: 'line',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ Items',
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
