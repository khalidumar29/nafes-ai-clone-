import Image from 'next/image'
import MultiStepForm from './MultiStepForm'

const normalizeSteps = (rawSteps: any[]) => {
  return rawSteps.map((step) => ({
    step: step.stp,
    formType: step.fType,
    fields: step.flds.map((f: any) => ({
      title: f.ttl,
      inputs: f.inpts.map((i: any) => ({
        name: i.nm,
        label: i.lbl,
      })),
    })),
  }))
}

const MultiStepFormContainer = ({
  img,
  headline,
  subheadline,
  steps,
  btn = 'next',
  thanks,
  msg,
  back,
}: {
  img: { url: string }
  headline: string
  subheadline: string
  steps: any[]
  btn: string
  thanks?: string
  msg?: string
  back?: string
}) => {
  return (
    <section className="w-full grid lg:grid-cols-2 grid-cols-1 mt-[50px]">
      <div>
        <Image src={img.url} width={800} height={800} className="w-[75%]" alt="img"></Image>
        <div className="text-end relative -top-5">
          <p className="inline-block bg-gradient-to-r from-[#00b3a4] via-[#00a5b6] via-[#008bd6] via-[#5861db] to-[#8150d4] bg-clip-text text-transparent leading-[60px] pb-2 text-[72px] font-semibold [text-rendering:optimizeLegibility]">
            {headline}
          </p>
          <p className="text-[28px] text-[#cfd1d4]">{subheadline}</p>
        </div>
      </div>
      <div>
        <MultiStepForm
          allStepsData={normalizeSteps(steps)}
          submitButtonText={btn}
          submissionThanks={thanks}
          submissionMessage={msg}
          backToHomeText={back}
        />
      </div>
    </section>
  )
}

export default MultiStepFormContainer
