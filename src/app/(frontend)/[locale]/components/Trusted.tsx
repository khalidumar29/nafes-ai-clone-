'use client'
import { MoveUpRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const Trusted = ({ introText, heading, items }: any) => {
  return (
    <div className="bg-[#e6f7f6] mb-[100px]">
      <div className="container sm:py-[100px] py-[50px]">
        <p className="text-sm text-center mb-[40px]">{introText}</p>
        {/* if you had CompanySlider, keep it here */}
      </div>

      <div className="container sm:pt-[70px] pt-[40px]">
        <div className="mb-[90px]">
          <h4 className="text-[35px] text-center">{heading}</h4>
        </div>

        {items?.map((item: any, index: number) => (
          <div key={item.id} className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-[28px]">
            {index % 2 === 0 ? (
              <>
                {/* Left Image */}
                <div className="w-full flex justify-center sm:justify-end">
                  <div className="flex w-3/4 justify-center items-center">
                    {item.image && (
                      <Image
                        src={item.image.url}
                        alt={item.title}
                        width={320}
                        height={320}
                        className="w-[320px] sm:h-[320px] z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
                      />
                    )}
                  </div>
                </div>

                {/* Right Text */}
                <div className="w-full">
                  <div className="w-[56px] h-[56px] bg-[#C2E8E5] rounded-full ml-[70%] flex justify-center items-center">
                    <TrendingUp className="text-[#0CABA2]" size={42} />
                  </div>
                  <div className="w-3/4 px-3">
                    <h3 className="text-[24px] font-bold my-3">{item.title}</h3>
                    <p className="text-[#6b7280] leading-7">{item.text}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Left Text */}
                <div className="w-full flex flex-col items-end">
                  <div className="w-[56px] h-[56px] bg-[#C2E8E5] rounded-full flex justify-center items-center mr-[70%]">
                    <TrendingUp className="text-[#0CABA2]" size={42} />
                  </div>
                  <div className="w-3/4 px-3 text-end">
                    <h3 className="text-[24px] font-bold my-3">{item.title}</h3>
                    <p className="text-[#6b7280] leading-7">{item.text}</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center sm:justify-start">
                  <div className="flex w-3/4 justify-center items-center">
                    {item.image && (
                      <Image
                        src={item.image.url}
                        alt={item.title}
                        width={320}
                        height={320}
                        className="w-[320px] sm:h-[320px] z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="w-1/2 bg-white p-[18px] flex justify-end mt-[60px] rounded-tr-[32px]">
        <MoveUpRight className="text-teal-500" size={80} />
      </div>
    </div>
  )
}

export default Trusted
