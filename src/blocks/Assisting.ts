import { Block } from 'payload'

export const Assisting: Block = {
  slug: 'assisting',
  labels: {
    singular: 'Assisting Section',
    plural: 'Assisting Sections',
  },
  fields: [
    {
      name: 'titleLines',
      type: 'array',
      required: true,
      label: 'Title Lines',
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
      name: 'highlightText',
      type: 'text',
      label: 'Highlighted Text',
      required: true,
      defaultValue: 'assistant',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'Book Your Session',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
