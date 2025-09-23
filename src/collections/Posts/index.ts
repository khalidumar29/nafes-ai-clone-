import { CollectionConfig } from 'payload'
import {
  lexicalEditor,
  HeadingFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
} from '@payloadcms/richtext-lexical'
import {
  MetaTitleField,
  MetaDescriptionField,
  MetaImageField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { preventFeaturedDeletion } from './hooks/preventFeaturedDeletion'

export const Posts: CollectionConfig<'posts'> = {
  slug: 'posts',
  hooks: {
    beforeDelete: [preventFeaturedDeletion],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Post Title',
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      validate: (value: string | null | undefined) => {
        if (!value) return 'Slug is required.'
        const regex = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/
        if (!regex.test(value)) {
          return 'Slug must start with a letter or number, and only contain letters, numbers, or hyphens (no spaces or special characters).'
        }
        return true
      },
    },
    {
      name: 'Short Description',
      type: 'textarea',
      label: 'Short Description',
      localized: true,
    },
    {
      name: 'heroTag',
      type: 'text',
      label: 'Hero Tag', // e.g., "Competitions" badge
      localized: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      label: 'Author',
      admin: { position: 'sidebar' },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HorizontalRuleFeature(),
        ],
      }),
      label: 'Content',
      required: true,
    },
    {
      name: 'relatedPosts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      admin: { position: 'sidebar' },
      filterOptions: ({ id }) => ({ id: { not_in: [id] } }),
      label: 'Related Posts',
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        OverviewField({
          titlePath: 'seo.metaTitle',
          descriptionPath: 'seo.metaDescription',
          imagePath: 'seo.metaImage',
        }),
        MetaTitleField({ hasGenerateFn: true }),
        MetaImageField({ relationTo: 'media' }),
        MetaDescriptionField({}),
        PreviewField({
          hasGenerateFn: true,
          titlePath: 'seo.metaTitle',
          descriptionPath: 'seo.metaDescription',
        }),
      ],
    },
  ],
}
