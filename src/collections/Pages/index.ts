import type { CollectionConfig } from 'payload'

import { Assisting } from '@/blocks/Home/Assisting'
import { Client } from '@/blocks/Home/Client'
import { CompeteBetter } from '@/blocks/Home/CompeteBetter'
import { FAQ } from '@/blocks/Home/FAQ'
import { Hero } from '@/blocks/Home/Hero'
import { KeyFeatures } from '@/blocks/Home/KeyFeatures'
import { Trusted } from '@/blocks/Home/Trusted'
import { WorkFlow } from '@/blocks/Home/WorkFlow'
import { AboutSection } from '@/blocks/about/AboutSection'
import { CtaSection } from '@/blocks/about/Cta'
import { AboutHero } from '@/blocks/about/Hero'
import { Stats } from '@/blocks/about/Stats'
import { WhyChoose } from '@/blocks/about/WhyChoose'
import ArticleBlock from '@/blocks/artical/artical'
import { PrivacyPolicy } from '@/blocks/privacy-policy/PrivacyPolicy'
import { TermsAndConditions } from '@/blocks/terms-and-conditions/TermsAndConditions'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    // defaultColumns: ['updatedAt'],
    // livePreview: {
    //   url: ({ data, req }) => {
    //     const path = generatePreviewPath({
    //       slug: typeof data?.slug === 'string' ? data.slug : '',
    //       collection: 'pages',
    //       req,
    //     })

    //     return path
    //   },
    // },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Hero,
        Trusted,
        CompeteBetter,
        WorkFlow,
        Client,
        Assisting,
        FAQ,
        AboutHero,
        AboutSection,
        ArticleBlock,
        WhyChoose,
        Stats,
        CtaSection,
        PrivacyPolicy,
        KeyFeatures,
        TermsAndConditions,
      ],
      localized: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description:
          'The date the page will be considered published. If this date is in the future, the page will not be publicly accessible until that date.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
