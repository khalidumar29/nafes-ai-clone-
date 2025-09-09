import { MoveUpRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import bar from '../../../../../public/images/bars.webp'
import chert from '../../../../../public/images/chert.webp'
import lines from '../../../../../public/images/lines.webp'
import CompanySlider from './CompanySlider'
const Trusted = () => {
  const data = [
    {
      id: 0,
      image: bar,
      title: 'For Bid Managers',
      text: 'Save time and focus on smart bidding. Nafes provides you with data-backed pricing estimates, competitor insights, and historical comparisons — plus full tracking of compliance across every bid. Eliminate guesswork and manage submissions with clarity and confidence',
    },
    {
      id: 1,
      image: chert,
      title: 'For Sales and BD Teams',
      text: 'Qualify opportunities faster and prioritize high-value deals. Nafes helps you assess tender fit based on sector, timing, and client familiarity — enabling you to make faster go/no-go decisions and focus your pipeline on tenders worth pursuing.',
    },
    {
      id: 2,
      image: lines,
      title: 'For Proposal Writers',
      text: 'Focus on technical readiness and accurate responses — not document overload. Nafes helps you break down complex tender documents using AI-powered analysis, so you can extract key technical requirements quickly and craft compliant, realistic, and winning proposals with less effort.',
    },
  ]
  return (
    <div className="bg-[#e6f7f6] mb-[100px]">
      <div className="container py-[100px]">
        <p className="text-sm text-center mb-[40px]">Trusted by the top organizations</p>
        <div>
          <CompanySlider />
        </div>
      </div>
      <div className="container pt-[70px]">
        <div className="mb-[90px]">
          <h4 className="text-[35px] text-center">Let AI help you outpace your competitors</h4>
        </div>
        {data.map((item, index) => (
          <div key={item.id} className="grid grid-cols-2 gap-10 mt-[28px]">
            {index % 2 === 0 ? (
              <>
                <div className="w-full flex justify-end">
                  <div className="flex w-3/4 justify-center items-center">
                    <Image
                      src={item.image}
                      alt="bar"
                      className=" w-[320px] h-[320px] z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
                    ></Image>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-[56px] h-[56px] bg-[#C2E8E5] rounded-full ml-[70%] flex justify-center items-center ">
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
                <div className="w-full flex flex-col items-end">
                  <div className="w-[56px] h-[56px] bg-[#C2E8E5] rounded-full flex justify-center items-center mr-[70%] ">
                    <TrendingUp className="text-[#0CABA2]" size={42} />
                  </div>
                  <div className="w-3/4 px-3 text-end">
                    <h3 className="text-[24px] font-bold my-3">{item.title}</h3>
                    <p className="text-[#6b7280] leading-7">{item.text}</p>
                  </div>
                </div>
                <div className="w-full flex ">
                  <div className="flex w-3/4 justify-center items-center">
                    <Image
                      src={item.image}
                      alt="bar"
                      className=" w-[320px] h-[320px] z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
                    ></Image>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="w-1/2 bg-white p-[18px]  flex justify-end mt-[60px] rounded-tr-[32px]">
        <MoveUpRight className="text-teal-500" size={80} />
      </div>
    </div>
  )
}

export default Trusted
