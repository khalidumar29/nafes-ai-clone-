import Image from 'next/image'
import MultiStepForm from './MultiStepForm'
const MultiStepFormContainer = ({
  image,
  headline,
  subheadline,
  steps,
}: {
  image: { url: string }
  headline: string
  subheadline: string
  steps: any[]
}) => {
  return (
    <section className="w-full grid lg:grid-cols-2 grid-cols-1 mt-[50px]">
      <div>
        <Image src={image.url} width={800} height={800} className="w-[75%]" alt="img"></Image>
        <div className="text-end relative -top-5">
          <p className="inline-block bg-gradient-to-r from-[#00b3a4] via-[#00a5b6] via-[#008bd6] via-[#5861db] to-[#8150d4] bg-clip-text text-transparent leading-[60px] pb-2 text-[72px] font-semibold [text-rendering:optimizeLegibility]">
            {headline}
          </p>
          <p className="text-[28px] text-[#cfd1d4]">{subheadline}</p>
        </div>
      </div>
      <div>
        <MultiStepForm allStepsData={steps} />
      </div>
    </section>
  )
}

export default MultiStepFormContainer
