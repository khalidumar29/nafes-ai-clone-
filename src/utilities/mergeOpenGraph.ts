import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  title: 'Ostool | Smart Fleet Management',
  siteName: 'Ostool',
  description:
    'Ostool is a smart cloud-based system that helps you manage your vehicle fleet through an easy-to-use interface that supports the Arabic language. You can track vehicles in real time, manage bookings and maintenance, organize customer and employee data, and monitor accounts and revenues. Ostool provides fully customizable fleet management tailored to your business needs, with strong security measures to ensure the safety of your data.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
