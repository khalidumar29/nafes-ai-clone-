import { Block } from 'payload'

export const Client: Block = {
  slug: 'client',
  labels: {
    singular: 'Client Testimonial',
    plural: 'Client Testimonials',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our Clients Feedback',
    },
    {
      name: 'reviews',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Position / Company',
        },
        {
          name: 'feedback',
          type: 'textarea',
          required: true,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Avatar Image',
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Star Rating (1-5)',
          min: 1,
          max: 5,
          required: true,
          defaultValue: 5,
        },
      ],
    },
  ],
}
