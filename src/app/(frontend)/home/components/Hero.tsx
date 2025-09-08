import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import bar from '../../../../../public/images/bars.webp'
import man from '../../../../../public/images/fffd.webp'
import live2 from '../../../../../public/images/live2.webp'
const Hero = () => {
  return (
    <div className="bg-[linear-gradient(0deg,#e6f7f6_0%,rgba(36,13,172,.08)_40%,#fff_100%)]">
      <div className="container relative ">
        <div className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-6xl mx-auto container  ">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Boost your Revenue With
          </h1>

          {/* Gradient Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              AI Tender
            </span>{' '}
            <span className="text-gray-900">Analytics</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex items-center space-x-8 mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-black rounded-[8px] text-gray-800 px-8 py-3 text-lg h-full hover:bg-teal-500 hover:border-none hover:text-white"
            >
              Start Now
            </Button>
            <Button
              variant={'ghost'}
              className="text-gray-800 hover:bg-teal-500 hover:text-white transition-colors text-lg font-medium px-8 py-3  h-full rounded-[8px]"
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center relative ">
          <Image src={live2} alt="image" className="w-[55%] z-10 mr-10"></Image>
          <div className="w-[25em] h-[25em] bg-[#f4f8ffda] rounded-full absolute -top-[10em] left-[7em] flex items-center justify-center">
            {' '}
            <div className="w-[13em] h-[13em] rounded-full bg-[#ecf6ffea]"></div>
          </div>

          <div className="absolute top-24 left-44">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="w-[250px] bg-black text-white p-[15px] rounded-[25px] absolute bottom-[10em] left-[5em]">
          a simple interface and a wide range of services at your fingertips
        </div>
        {/* radial-gradient(circle,rgba(91,57,187,.2) 15%,rgba(91,57,187,0) 70%) */}

        <Image
          src={bar}
          alt="bar"
          className="absolute w-[264px] h-[280px] bottom-0 right-[18em] z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
        ></Image>
        <div className="hero-person">
          <Image
            src={man}
            alt="bar"
            width={218.19}
            height={205.46}
            className="absolute  bottom-0 right-[29em]  shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px] z-20"
          ></Image>
        </div>
        <div className="w-48 absolute right-[30em] -bottom-[7em]">
          <p className="text-sm">
            a simple interface and a wide range of services at your fingertips
          </p>
        </div>
      </div>
      <div className="h-[8em]"></div>
    </div>
  )
}

export default Hero
