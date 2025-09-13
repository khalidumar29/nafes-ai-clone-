import { GlobalConfig } from 'payload'

export const Navbar: GlobalConfig = {
  slug: 'navbar',
  label: 'Navbar',
  access: {
    read: () => true, // public
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'line1',
          type: 'text',
          label: 'Top Line (Arabic)',
          required: true,
          defaultValue: 'نوالي',
        },
        {
          name: 'line2',
          type: 'text',
          label: 'Bottom Line (English)',
          required: true,
          defaultValue: 'Nafes',
        },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Right Side Buttons',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Primary (Teal)', value: 'primary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'primary',
        },
      ],
    },
  ],
}
