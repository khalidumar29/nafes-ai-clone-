import { cn } from '@/utilities/ui'

const StepContainer = ({ allSteps, currentStep }) => {
  return (
    <div className="flex items-center justify-center gap-[5px]">
      {allSteps.map((item) => (
        <div
          key={item.step}
          className={cn(
            'w-4 h-[6px] rounded bg-[#cfd1d4]',
            currentStep > item.step && 'bg-[#240dac]',
            currentStep === item.step && 'bg-[#0daca3] w-[32px]',
          )}
        />
      ))}
    </div>
  )
}

export default StepContainer
