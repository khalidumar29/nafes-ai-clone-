import { Block } from 'payload'

export const WorkFlow: Block = {
  slug: 'workFlow',
  labels: {
    singular: 'Workflow',
    plural: 'Workflows',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'highlight',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro Paragraph',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Workflow Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Workflow Image',
    },
  ],
}
