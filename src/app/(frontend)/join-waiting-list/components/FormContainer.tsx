import Image from 'next/image'
import img from '../../../../../public/images/waiting-ar.webp'
import MultiStepForm from './MultiStepForm'
const FormContainer = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 grid-cols-1 mt-[50px]">
      <div>
        <Image src={img} width={800} height={800} className="w-[75%]" alt="img"></Image>
        <div className="text-end relative -top-5">
          <p className="inline-block bg-gradient-to-r from-[#00b3a4] via-[#00a5b6] via-[#008bd6] via-[#5861db] to-[#8150d4] bg-clip-text text-transparent leading-[60px] pb-2 text-[72px] font-semibold [text-rendering:optimizeLegibility]">
            50,000+
          </p>
          <p className="text-[28px] text-[#cfd1d4]">Joined the waiting list</p>
        </div>
      </div>
      <div>
        <MultiStepForm />
      </div>
    </section>
  )
}

export default FormContainer
