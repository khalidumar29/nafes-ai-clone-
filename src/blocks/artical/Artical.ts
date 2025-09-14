import { Block } from 'payload'

const ArticleBlock: Block = {
  slug: 'articleBlock',
  labels: {
    singular: 'Article Section',
    plural: 'Articles Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Recent Articles from Our Blog',
    },
    {
      name: 'articles',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default ArticleBlock
