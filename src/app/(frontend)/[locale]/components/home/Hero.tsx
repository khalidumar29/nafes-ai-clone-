import LocaleLink from '@/components/shared/LocaleLink'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

type HeroBlockProps = {
  heading: string
  highlight?: string
  subHeading?: string
  primaryButton?: string
  secondaryButton?: string
  mainImage?: { url: string; alt: string }
  barImage?: { url: string; alt: string }
  personImage?: { url: string; alt: string }
  bubbleText?: string
}

const HeroBlock = ({
  heading,
  highlight,
  subHeading,
  primaryButton,
  secondaryButton,
  mainImage,
  barImage,
  personImage,
  bubbleText,
}: HeroBlockProps) => {
  return (
    <div className="bg-[linear-gradient(0deg,#e6f7f6_0%,rgba(36,13,172,.08)_40%,#fff_100%)]">
      <div className="container relative">
        <div className="flex flex-col items-center justify-center text-center sm:px-6 py-20 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 sm:mb-8 sm:w-[85%] sm:!leading-[1.3]">
            {heading}{' '}
            {highlight && (
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}{' '}
            {subHeading && <span className="text-gray-900">{subHeading}</span>}
          </h1>

          <div className="flex items-center space-x-8 mt-12">
            {primaryButton && (
              <LocaleLink href={'/'}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-black rounded-[8px] text-gray-800 px-8 py-3 text-lg h-full hover:bg-teal-500 hover:border-none hover:text-white"
                >
                  {primaryButton}
                </Button>
              </LocaleLink>
            )}
            {secondaryButton && (
              <LocaleLink href={'/'}>
                <Button
                  variant={'ghost'}
                  className="text-gray-800 hover:bg-teal-500 hover:text-white transition-colors text-lg font-medium px-8 py-3 h-full rounded-[8px]"
                >
                  {secondaryButton}
                </Button>
              </LocaleLink>
            )}
          </div>
        </div>

        <div className="w-full flex items-center justify-center relative">
          {mainImage && (
            <Image
              src={mainImage.url}
              alt={mainImage.alt}
              width={600}
              height={400}
              className="sm:w-[55%] w-full z-10 sm:mr-10"
            />
          )}

          <div className="sm:w-[25em] sm:h-[25em] w-[10em] h-[10em] bg-[#f4f8ffda] rounded-full absolute sm:-top-[10em] sm:left-[7em] -top-10 left-0 flex items-center justify-center">
            <div className="sm:w-[13em] sm:h-[13em] w-[6em] h-[6em] rounded-full bg-[#ecf6ffea]"></div>
          </div>

          <div className="absolute sm:top-24 sm:left-44 bottom-0">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {bubbleText && (
          <div className="sm:w-[250px] w-[150px] bg-black text-white p-[15px] rounded-[25px] absolute sm:bottom-[10em] bottom-10 sm:left-[5em] z-10 text-sm sm:text-base">
            {bubbleText}
          </div>
        )}

        {barImage && (
          <Image
            src={barImage.url}
            alt={barImage.alt || 'image'}
            width={264}
            height={280}
            className="absolute w-[150px] sm:w-[264px] sm:h-[280px] bottom-0 sm:right-[18em] right-5 z-10 shadow-[0_0_20px_0_rgba(0,0,0,0.15)] rounded-[24px]"
          />
        )}

        {personImage && (
          <Image
            src={personImage.url}
            alt={personImage.alt}
            width={218}
            height={205}
            className="absolute bottom-0 right-28 w-[7em] sm:w-[218px] sm:right-[29em] shadow-[0_0_20px_0_rgba(0,0,0,0.15)] sm:rounded-[24px] rounded-[15px] z-20"
          />
        )}
      </div>
      <div className="h-[8em]"></div>
    </div>
  )
}

export default HeroBlock
