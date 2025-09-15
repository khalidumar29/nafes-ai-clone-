import { Block } from 'payload'

export const WaitingListReason: Block = {
  slug: 'waitingListReason',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'reasons',
      type: 'array',
      fields: [
        {
          name: 'reason',
          type: 'text',
          required: true,
        },
      ],
      required: true,
      minRows: 1,
    },
    {
      name: 'subTitle',
      type: 'text',
      required: false,
      defaultValue: 'Increase your chances of winning government tenders with Nafes',
    },
  ],
}
