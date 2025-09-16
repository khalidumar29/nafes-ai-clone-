import { Block } from 'payload'

export const Stats: Block = {
  slug: 'statsSection',
  labels: {
    singular: 'Stats Section',
    plural: 'Stats Sections',
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
        },
      ],
    },
    // {
    //   name: 'backgroundGradient',
    //   type: 'text',
    //   required: false,
    //   defaultValue: 'linear-gradient(92.16deg, #0daca3 43.64%, #250f8d 134.77%)',
    // },
    {
      name: 'textColor',
      type: 'text',
      defaultValue: 'white',
    },
    {
      name: 'direction',
      type: 'select',
      options: [
        { label: 'LTR', value: 'ltr' },
        { label: 'RTL', value: 'rtl' },
      ],
      defaultValue: 'rtl',
    },
  ],
}
