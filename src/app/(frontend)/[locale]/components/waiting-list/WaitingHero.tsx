import React from 'react'

const WaitingHero = ({ heroTitle }: { heroTitle: string }) => {
  return (
    <h1 className="text-black mt-20 text-[64px] font-bold w-[650px] leading-[64px]">{heroTitle}</h1>
  )
}

export default WaitingHero
