import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import img from '../../../../../public/images/h.webp'
const Assenting = () => {
  return (
    <div className="container ">
      <div className="py-[40px] px-[80px] bg-[#E6F6F6] grid grid-cols-2 rounded-[24px]">
        <div className="flex flex-col justify-center gap-[60px]">
          <h3 className="text-[64px] leading-[65px] font-bold">
            Nafes<br></br> interactive<br></br>
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              assistant
            </span>
          </h3>
          <Button size={'lg'} className="w-fit text-[#0daca3]">
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
