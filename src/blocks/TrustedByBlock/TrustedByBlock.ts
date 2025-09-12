import { Block } from 'payload'

export const TrustByBlock: Block = {
  slug: 'trustBy', // A unique identifier for this block
  labels: {
    singular: 'Trusted by Section',
    plural: 'Trusted by Sections',
  },
  fields: [
    {
      name: 'companyImgs',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Assuming 'media' is your upload collection
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Feature Cards',
      minRows: 1, // You could require at least one feature card
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
