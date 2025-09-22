const WaitingHero = ({ heroTitle }: { heroTitle: string }) => {
  return (
    <div className="container">
      <h1 className="text-black mt-20 md:text-[64px] text-[30px] font-bold md:w-[650px] w-full md:leading-[64px] leading-[50px]">
        {heroTitle}
      </h1>
    </div>
  )
}

export default WaitingHero
