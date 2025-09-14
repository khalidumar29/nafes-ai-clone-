import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const FormButtonContainer = ({ handleBack, handleNext, currentStep, isDisable = false }) => {
  return (
    <div className="w-full flex justify-between">
      {currentStep > 1 && (
        <Button onClick={handleBack} variant={'ghost'}>
          <ArrowLeft />
        </Button>
      )}
      <Button disabled={isDisable} onClick={handleNext} variant={'outline'} type="submit">
        Next <ArrowRight />
      </Button>
    </div>
  )
}

export default FormButtonContainer
