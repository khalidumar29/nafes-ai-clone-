import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import img from '../../../../../public/images/h.webp'
const Assenting = () => {
  return (
    <div className="container ">
      <div className="sm:py-[40px] sm:px-[80px] py-[20px] px-[40px] bg-[#E6F6F6] grid sm:grid-cols-2 grid-cols-1 rounded-[24px]">
        <div className="flex flex-col justify-center sm:gap-[60px] gap-[20px]">
          <h3 className="sm:text-[64px] text-[40px] sm:leading-[65px] leading-[40px] font-bold">
            Nafes<br></br> interactive<br></br>
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              assistant
            </span>
          </h3>
          <Button className="w-fit text-[#0daca3]">
            Book Your Session <MoveRight className="ml-2" />
          </Button>
        </div>
        <div>
          <div className="relative -bottom-[44px]">
            <Image src={img} alt="img" width={500} height={500} className=" object-contain"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assenting
