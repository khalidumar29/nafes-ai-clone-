import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: 'https://placehold.co/1080x540/F5F5F5/333?text=Hero',
  imageAltText: 'A preview of the Hero block layout.',
  fields: [
    {
      name: 'heading',
      label: 'Main Heading',
      type: 'group',
      fields: [
        {
          name: 'part1',
          type: 'text',
          label: 'Part 1 (Normal Text)',
          admin: { description: 'Text before the gradient.' },
        },
        {
          name: 'highlighted',
          type: 'text',
          label: 'Part 2 (Gradient Text)',
          admin: { description: 'The text that will have a gradient applied.' },
        },
        {
          name: 'part3',
          type: 'text',
          label: 'Part 3 (Normal Text)',
          admin: { description: 'Text after the gradient.' },
        },
      ],
    },
    {
      name: 'buttons',
      type: 'array',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'link',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
        {
          name: 'style',
          type: 'radio',
          options: [
            { label: 'Primary (Outline)', value: 'primary' },
            { label: 'Secondary (Ghost)', value: 'secondary' },
          ],
          defaultValue: 'primary',
          admin: { layout: 'horizontal' },
        },
      ],
    },
    {
      name: 'images',
      label: 'Hero Images',
      type: 'group',
      fields: [
        {
          name: 'mainImage',
          label: 'Main Center Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'personImage',
          label: 'Person Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'barImage',
          label: 'Bar Chart Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'floatingText',
      label: 'Floating Text Snippets',
      type: 'group',
      fields: [
        {
          name: 'topLeft',
          label: 'Top-Left Snippet',
          type: 'text',
        },
        {
          name: 'bottomRight',
          label: 'Bottom-Right Snippet',
          type: 'text',
        },
      ],
    },
  ],
}
