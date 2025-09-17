'use client'
import Image from 'next/image'

const CompeteBetter = ({ heading, dashboardImage, dashboardNote, cards }: any) => {
  return (
    <div className="container">
      {/* Heading */}
      <div className="grid grid-cols-12 mb-[60px]">
        <h1 className="sm:col-span-5 col-span-12 font-bold text-[64px]">{heading}</h1>
      </div>

      {/* Dashboard + Cards */}
      <div className="grid grid-cols-12 mb-[60px]">
        {/* Left Dashboard Image */}
        <div className="sm:col-span-5 col-span-12 relative px-[10px]">
          <div className="sm:pr-[40px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-full after:bg-[linear-gradient(0deg,#fff_0%,hsla(0,0%,100%,.7)_20%,hsla(0,0%,100%,0)_100%)] after:pointer-events-none">
            {dashboardImage && (
              <Image
                src={dashboardImage.url}
                alt="dashboard"
                width={600}
                height={400}
                className="w-full"
              />
            )}
          </div>

          {/* Floating Note */}
          {dashboardNote && (
            <div className="bg-black text-white p-2 text-center w-[240px] absolute rounded-[24px] text-sm bottom-[8em] sm:-left-8">
              {dashboardNote}
            </div>
          )}
        </div>

        {/* Right Cards */}
        <div className="sm:col-span-7 col-span-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards?.map((item: any, index: number) => (
              <div key={index}>
                <div className="w-[64px] h-[64px] bg-[#dff1ef] rounded-full flex items-center justify-center mb-4">
                  {item.icon && (
                    <Image src={item.icon.url} alt={item.title} width={40} height={40} />
                  )}
                </div>
                <h3 className="font-medium text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompeteBetter
