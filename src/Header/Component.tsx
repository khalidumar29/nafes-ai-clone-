import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

export async function Header() {
  const headerData: any = await getCachedGlobal('navbar', 1)()

  return <HeaderClient data={headerData} />
}
