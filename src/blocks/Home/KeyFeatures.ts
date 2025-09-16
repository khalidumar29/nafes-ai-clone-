import { Block } from 'payload'

export const KeyFeatures: Block = {
  slug: 'keyFeatures',
  labels: {
    singular: 'Key Features Block',
    plural: 'Key Features Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'Key Features',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      required: true,
      defaultValue: 'Everything you need to turn everyday moments into lasting achievements',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features List',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Feature Description',
          required: true,
        },
        {
          name: 'iconText',
          type: 'text',
          label: 'Text by Icons',
          required: true,
        },
        {
          name: 'icons',
          type: 'array',
          label: 'Icons',
          minRows: 1,
          maxRows: 3,
          fields: [
            {
              name: 'icon',
              type: 'text', // Using text field for emoji
              label: 'Icon (Emoji)',
              required: true,
            },
            {
              name: 'backgroundColor',
              type: 'select',
              label: 'Background Color',
              required: true,
              options: [
                { label: 'Blue', value: 'bg-blue-100' },
                { label: 'Green', value: 'bg-green-100' },
                { label: 'Purple', value: 'bg-purple-100' },
                { label: 'Yellow', value: 'bg-yellow-100' },
                { label: 'Orange', value: 'bg-orange-100' },
              ],
            },
          ],
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Video',
          required: true,
        },
      ],
    },
  ],
}
