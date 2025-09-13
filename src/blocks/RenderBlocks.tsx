import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'

// import all block components you support
import Hero from '@/app/(frontend)/[locale]/components/Hero'

const blockComponents: Record<string, React.FC<any>> = {
  hero: Hero,
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
