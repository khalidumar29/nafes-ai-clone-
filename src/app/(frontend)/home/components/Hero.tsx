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
        <div className="flex flex-col items-center justify-center text-center sm:px-6 py-20 max-w-6xl mx-auto container  ">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 sm:mb-8  sm:w-[85%] sm:!leading-[1.3]">
            Boost your Revenue With{' '}
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
          <Image src={live2} alt="image" className="sm:w-[55%] w-full z-10 sm:mr-10"></Image>
          <div className="sm:w-[25em] sm:h-[25em] w-[10em] h-[10em] bg-[#f4f8ffda] rounded-full absolute sm:-top-[10em] sm:left-[7em] -top-10 left-0 flex items-center justify-center">
            {' '}
            <div className="sm:w-[13em] sm:h-[13em] w-[6em] h-[6em] rounded-full bg-[#ecf6ffea]"></div>
          </div>

          <div className="absolute sm:top-24 sm:left-44 bottom-0">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="sm:w-[250px] w-[150px] bg-black text-white p-[15px] rounded-[25px] absolute sm:bottom-[10em] bottom-10 sm:left-[5em] z-10 text-sm sm:text-base">
          a simple interface and a wide range of services at your fingertips
        </div>
        {/* radial-gradient(circle,rgba(91,57,187,.2) 15%,rgba(91,57,187,0) 70%) */}

        <Image
          src={bar}
          alt="bar"
          className="absolute w-[150px] sm:w-[264px] sm:h-[280px] bottom-0 sm:right-[18em] right-5 z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
        ></Image>
        <div className="hero-person">
          <Image
            src={man}
            alt="bar"
            width={218.19}
            height={205.46}
            className="absolute  bottom-0 right-28 w-[7em] sm:w-[218px] sm:right-[29em]  shadow-[0_0_20px_0_rgba(0,0,0,0.15)] sm:rounded-[24px] rounded-[15px] z-20"
          ></Image>
        </div>
        <div className="w-48 absolute sm:right-[30em] right-10 -bottom-[7em]  ">
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
