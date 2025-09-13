import Image from 'next/image'
import ChartLine from '../../../../../public/icons/ChartLine.svg'
import Sparkle from '../../../../../public/icons/Sparkle.svg'
import Speedometer from '../../../../../public/icons/Speedometer.svg'
import Target from '../../../../../public/icons/Target.svg'
import dashboard from '../../../../../public/images/w.webp'
const CompeteBetter = () => {
  const cards = [
    {
      id: 0,
      title: 'Choose the Right Tender for You',
      des: 'Quickly identify the most relevant and promising opportunities. Nafes delivers smart, AI-powered recommendations for tenders that match your company’s profile, capabilities, and profit potential. You’ll receive early alerts and targeted suggestions, so you can focus your efforts on high-opportunity tenders that are worth pursuing.',
      img: Speedometer,
    },
    {
      id: 1,
      title: 'Expedite Your Decision to Participate',
      des: 'Use AI to qualify opportunities faster and with more precision. Nafes analyzes each tender using sales and bid qualification criteria such as client suitability, timelines, technical scope, and internal readiness. This helps you make faster go/no-go decisions while reducing time waste and increasing bid efficiency.',
      img: ChartLine,
    },
    {
      id: 2,
      title: 'Become More Compliant with Every Bid',
      des: 'Track compliance across all bids and improve with every submission. With Nafes, you can monitor each proposal’s alignment with administrative, technical, and financial requirements. The platform also helps you evaluate your team’s internal performance and identify areas for improvement to enhance bid quality over time.',
      img: Sparkle,
    },
    {
      id: 3,
      title: 'Find Your Winning Strategy',
      des: 'Explore the full context of each tender and define the optimal pricing approach. Nafes equips you with powerful research tools to analyze tender documents, market context, and generate pricing estimates based on historical data and similar bids. Our AI-powered tools help you digest complex documents quickly, enabling you to make smarter pricing and proposal decisions.',
      img: Target,
    },
  ]
  return (
    <div className="container">
      <div className="grid grid-cols-12 mb-[60px]">
        <h1 className="sm:col-span-5 col-span-12 font-bold text-[64px]">
          Stay ahead and compete better
        </h1>
      </div>
      <div className="grid grid-cols-12 mb-[60px]">
        <div className="sm:col-span-5 col-span-12 relative px-[10px]">
          <div className="sm:pr-[40px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-full after:bg-[linear-gradient(0deg,#fff_0%,hsla(0,0%,100%,.7)_20%,hsla(0,0%,100%,0)_100%)] after:pointer-events-none">
            <Image src={dashboard} alt="dashboard" className="w-full "></Image>
          </div>
          <div className="bg-black text-white p-2 text-center w-[240px] absolute rounded-[24px] text-sm bottom-[8em] sm:-left-8">
            Explore our innovative features for an easy, enjoyable browsing experience with a simple
            interface and a wide range of services at your fingertips
          </div>
        </div>
        <div className="sm:col-span-7 col-span-12 ">
          <div className="grid grid-cols-2 gap-5 ">
            {cards?.map((item) => (
              <div key={item.id}>
                <div className="w-[64px] h-[64px] bg-[#dff1ef] rounded-full flex items-center justify-center mb-4">
                  <Image src={item.img} alt="image"></Image>
                </div>
                <h3 className="font-medium text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-[1.7]">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompeteBetter
