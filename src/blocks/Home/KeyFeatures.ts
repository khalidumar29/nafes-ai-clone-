import { Block } from 'payload'

export const KeyFeatures: Block = {
  slug: 'keyFeatures',
  labels: {
    singular: 'Key Features Block',
    plural: 'Key Features Blocks',
  },
  fields: [
    {
      name: 'ttl',
      type: 'text',
      label: 'Main Title',
      required: true,
      defaultValue: 'Key Features',
    },
    {
      name: 'sub',
      type: 'textarea',
      label: 'Subtitle',
      required: true,
      defaultValue: 'Everything you need to turn everyday moments into lasting achievements',
    },
    {
      name: 'ftrs', // features
      type: 'array',
      label: 'Features List',
      minRows: 1,
      fields: [
        { name: 'ttl', type: 'text', label: 'Feature Title', required: true },
        { name: 'desc', type: 'textarea', label: 'Feature Description', required: true },
        { name: 'txt', type: 'text', label: 'Text by Icons', required: true },
        {
          name: 'icns', // icons
          type: 'array',
          label: 'Icons',
          minRows: 1,
          maxRows: 3,
          fields: [
            { name: 'icn', type: 'text', label: 'Icon (Emoji)', required: true },
            {
              name: 'bg', // backgroundColor
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
          name: 'vid',
          type: 'upload',
          relationTo: 'media',
          label: 'Feature Video',
          required: true,
        },
      ],
    },
  ],
}
