import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock', // A unique identifier for this block
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading',
      required: true,
    },
    {
      name: 'tagline', // Optional field for a sub-heading if you want one
      type: 'text',
      label: 'Tagline',
    },
    {
      name: 'leftImgText',
      type: 'text',
      label: 'left img text ',
      required: true,
    },
    {
      name: 'bottomImgText',
      type: 'text',
      label: 'bottom img text ',
      required: true,
    },
    {
      name: 'mainImg',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media', // This links to your media collection
      required: true,
    },
    {
      name: 'barImg',
      type: 'upload',
      label: 'bar Image',
      relationTo: 'media', // This links to your media collection
      required: true,
    },
    {
      name: 'manImg',
      type: 'upload',
      label: 'man Image',
      relationTo: 'media', // This links to your media collection
      required: true,
    },
  ],
}
