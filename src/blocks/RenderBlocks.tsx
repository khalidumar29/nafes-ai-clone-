import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'

// import all block components you support
import Hero from '@/app/(frontend)/[locale]/components/Hero'
import Trusted from '@/app/(frontend)/[locale]/components/Trusted'
import CompeteBetter from '@/app/(frontend)/[locale]/components/CompeteBetter'
import WorkFlow from '@/app/(frontend)/[locale]/components/WorkFlow'
import Client from '@/app/(frontend)/[locale]/components/Client'
import Assisting from '@/app/(frontend)/[locale]/components/Assisting'
import FAQ from '@/app/(frontend)/[locale]/components/FAQ'
const blockComponents: Record<string, React.FC<any>> = {
  hero: Hero,
  trusted: Trusted,
  competeBetter: CompeteBetter,
  workFlow: WorkFlow,
  client: Client,
  assisting: Assisting,
  faq: FAQ,
}

export const RenderBlocks: React.FC<{
  blocks?: Page['layout'] // <-- use flat array, optional
}> = ({ blocks = [] }) => {
  if ((blocks ?? []).length === 0) return null

  return (
    <Fragment>
      {(blocks ?? []).map((block, index) => {
        const { blockType } = block
        const Block = blockType ? blockComponents[blockType] : null
        if (!Block) return null

        return (
          <div className="my-16" key={index}>
            <Block {...block} disableInnerContainer />
          </div>
        )
      })}
    </Fragment>
  )
}
