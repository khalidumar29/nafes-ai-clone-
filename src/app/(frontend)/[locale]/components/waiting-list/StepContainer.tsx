import { Step } from '@/type'
import { cn } from '@/utilities/ui'

interface StepContainerProps {
  allSteps: Step[]
  currentStep: number
}

const StepContainer = ({ allSteps, currentStep }: StepContainerProps) => {
  return (
    <div className="flex items-center justify-center gap-[5px]">
      {allSteps?.map((item) => (
        <div
          key={item.step}
          className={cn(
            'w-4 h-[6px] rounded bg-[#cfd1d4]',
            currentStep > item.step && 'bg-primary',
            currentStep === item.step && 'bg-[#0548ff] w-[32px]',
          )}
        />
      ))}
    </div>
  )
}

export default StepContainer
