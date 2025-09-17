const WaitingHero = ({ heroTitle }: { heroTitle: string }) => {
  return (
    <div className="container">
      <h1 className="text-black mt-20 text-[64px] font-bold w-[650px] leading-[64px]">
        {heroTitle}
      </h1>
    </div>
  )
}

export default WaitingHero
