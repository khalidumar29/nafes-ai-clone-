import { Block } from 'payload'

export const WaitingListHero: Block = {
  slug: 'waitingListHero',
  labels: {
    singular: 'Waiting List Hero Section',
    plural: 'Waiting List Hero Sections',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      label: 'Hero Title',
      required: true,
      defaultValue: '',
    },
  ],
}
