import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import img from '../../../../public/images/about.webp'
import ff from '../../../../public/images/ff.webp'

import ChartLine from '../../../../public/icons/ChartLine.svg'
import Sparkle from '../../../../public/icons/Sparkle.svg'
import Speedometer from '../../../../public/icons/Speedometer.svg'
import Client from '../home/components/Client'
import CompanySlider from '../home/components/CompanySlider'
const About = () => {
  const cards = [
    {
      id: 0,
      title: 'Be Advanced. Save Your Time.',
      des: 'With Nafes, AI does the heavy lifting, analyzing past tenders, competitor performance, and success probabilities—so you can focus on strategy, not guesswork.',
      img: Speedometer,
    },
    {
      id: 1,
      title: 'Take Advantage of Artificial Intelligence',
      des: 'Harness the power of AI-driven insights to make smarter, data-backed decisions. Our platform helps you identify the right opportunities - all with minimal effort.',
      img: ChartLine,
    },
    {
      id: 2,
      title: 'Compete Smarter with AI-Powered Tech',
      des: 'Nafes gives you a competitive edge by providing deep market analysis, performance benchmarks, and smart recommendations.',
      img: Sparkle,
    },
  ]
  return (
    <div>
      <div className="container">
        <h1 className="text-[72px] font-bold leading-[1.3] mt-[1em]">
          Empowering Businesses <br></br>with{' '}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            Smart Tender
          </span>
          <br></br> Analytics
        </h1>
        <div className="pt-[93px]">
          <CompanySlider />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-[25px] justify-center">
            <h1 className="text-[62px] font-bold leading-[1.3]">
              Helping You Win More, Stress Less
            </h1>
            <p className="text-[#374151]">
              Nafes platform was launched to take you on a journey toward success, pioneering a
              transformative shift in the world of competitions. It introduces tools and insights
              powered by AI technologies to offer you integrated solutions throughout the entire and
              comprehensive bidding process within the Saudi market.
            </p>
            <Button className="w-fit" variant={'outline'}>
              Start Now <MoveRight className="ml-2" />
            </Button>
          </div>
          <div>
            <Image src={img} className="ml-10" alt="img" width={800} height={800}></Image>
          </div>
        </div>
      </div>
      <section className="bg-[linear-gradient(to_bottom,#fff_0%,#e6f7f6_27.88%,#e6f7f6_82.69%,#fff_100%)]">
        <div className="container">
          <h1 className=" text-[64px] font-bold text-center leading-[1.3]">
            No More Guesswork –<br></br> Just Data-Driven Wins!
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-[rgb(55, 65, 81)] text-center w-1/2 mt-[30px] mb-[60px]">
              Nafes enables passionate employees and business owners to boost performance
              effortlessly. We champion Saudi SMEs&apos; vital market role, helping them secure
              golden opportunities for higher revenue.
            </p>
          </div>
          <div className="bg-[url('/images/bg.png')] bg-no-repeat bg-cover bg-[center_bottom] h-fit">
            <Image src={ff} alt="ff" className="w-full h-[300px]"></Image>
            <div className="mt-[65px] px-6 ">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Our Vision */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Inspiring companies to achieve exceptional professionalism and innovation in
                      Saudi competitions
                    </p>
                    {/* Vertical divider - hidden on mobile, shown on md+ */}
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  </div>

                  {/* Our Mission */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Empowering companies with knowledge and tools to win competitions through
                      modern approaches
                    </p>
                    {/* Vertical divider - hidden on mobile, shown on md+ */}
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  </div>

                  {/* Our Values */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our values</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Highlighting knowledge and enhancing performance to support a thriving
                      competitive environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <div className="container">
          <h1 className=" text-[64px] font-bold text-start leading-[1.3]">
            Why choose{' '}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              Nafes
            </span>
            ?
          </h1>
          <p className="w-[50%] mt-[30px] mb-[40px]">
            Nafes is a key pillar in strengthening the Saudi economy and delivering top bids to
            organizations across the Kingdom. It will continuously enhance its efficiency and expand
            its services, aligning with Vision 2030 through technological and economic integration.
          </p>
          <div className="grid grid-cols-3 gap-5 ">
            {cards?.map((item) => (
              <div
                key={item.id}
                className="p-[24px] border rounded-[10px] flex flex-col gap-[24px]"
              >
                <div className="w-[64px] h-[64px] bg-[#dff1ef] rounded-full flex items-center justify-center mb-4">
                  <Image src={item.img} alt="image"></Image>
                </div>
                <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-[1.7]">{item.des}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button variant={'outline'}>
              {' '}
              Join Us <MoveRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex justify-between items-center m-0 mx-auto py-[40px] px-[20px] bg-[linear-gradient(92.16deg,#0daca3_43.64%,#250f8d_134.77%)] rounded-[12px] text-white text-center [direction:rtl]">
          <div className="">
            <h2 className="text-[50px] font-bold m-0 mb-[8px]">+2K</h2>
            <p className="text-[18px] m-0 opacity-50">Completed Projects</p>
          </div>
          <div className="w-[1px] h-[60px] bg-white/30"></div>
          <div>
            <h2 className="text-[50px] font-bold m-0 mb-[8px]">190M+</h2>
            <p className="text-[18px] m-0 opacity-50">Value of competitions</p>
          </div>
          <div className="w-[1px] h-[60px] bg-white/30"></div>
          <div>
            <h2 className="text-[50px] font-bold m-0 mb-[8px]">50,000+</h2>
            <p className="text-[18px] m-0 opacity-50">Joined the waiting list</p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <Client />
      </section>
      <section>
        <div className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Let&apos;s Win Together
            </h2>

            {/* Description Text */}
            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              We inspire companies to achieve a great level of professionalism and innovation in
              Saudi competitions. Stand out by gaining early insights and indicators that enhance
              your competitive edge
            </p>

            {/* CTA Button */}
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg flex items-center space-x-3 mx-auto">
              <span className="text-teal-400">Start Now</span>
              <svg
                className="w-5 h-5 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
