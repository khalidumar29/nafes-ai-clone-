import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heros',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'highlight',
      type: 'text',
      label: 'Highlighted Text',
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Sub Heading',
    },
    {
      name: 'primaryButton',
      type: 'text',
      label: 'Primary Button Label',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      label: 'Primary Button Link',
      admin: {
        description: 'Enter a relative path like /contact or a full URL.',
      },
    },
    {
      name: 'secondaryButton',
      type: 'text',
      label: 'Secondary Button Label',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Hero Image',
    },
    {
      name: 'barImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Bar Image',
    },
    {
      name: 'personImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Person Image',
    },
    {
      name: 'bubbleText',
      type: 'text',
      label: 'Bubble Text',
    },
  ],
}
