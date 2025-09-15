'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormData } from '@/type'
import { cn } from '@/utilities/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import FinalStep from './FinalStep'
import StepContainer from './StepContainer'

const MultiStepForm = ({ allStepsData }: { allStepsData: any }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  interface StepInput {
    name: string
    value: string
  }

  interface StepField {
    title?: string
    inputs: StepInput[]
  }

  interface StepData {
    step: number
    formType: 'form' | 'select' | 'final'
    field: StepField[]
  }

  const currentStepData: StepData | undefined = (allStepsData as StepData[])?.find(
    (item: StepData) => item.step === currentStep,
  )
  // Extended schema for all fields
  const schema = z.object({
    objective: z.string().min(1, 'Objective is required'),
    platforms: z.string().min(1, 'Platform is required'),
    averageRate: z.string().min(1, 'Average rate is required'),
    tendersPerMonth: z.string().min(1, 'Tenders per month is required'),
    full_name: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email'),
    company_name: z.string().min(1, 'Company name is required'),
    mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  })

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      objective: '',
      platforms: '',
      averageRate: '',
      tendersPerMonth: '',
      full_name: '',
      email: '',
      company_name: '',
      mobile: '',
    },
  })
  console.log({ isValid, errors })

  const watchedValues = watch() // Watch all values for controlled selects

  const onSubmit = (data: FormData) => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Final submission (e.g., send to API)
      console.log('Final data:', data)
      // Handle API call here
    }
  }
  const handleSelect = (name: keyof FormData, value: string) => {
    setValue(name, value, { shouldValidate: true }) // Use setValue for selects
  }
  return (
    <div className="bg-white rounded-xl p-8 max-w-[560px] mx-auto shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-gray-200 m-0 flex flex-col gap-8 relative">
      <StepContainer
        allSteps={allStepsData?.map((stepObj: any) => ({
          step: stepObj.step,
          title:
            stepObj?.fields?.length > 0 && stepObj.fields[0].title
              ? stepObj.fields[0].title
              : `Step ${stepObj.step}`,
        }))}
        currentStep={currentStep}
      />
      {currentStepData?.formType !== 'final' ? (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {currentStepData?.field?.map((items: StepField, i: number) => (
            <div key={i} className="w-full">
              {items.title && <p className="font-bold text-2xl leading-10">{items.title}</p>}
              {currentStepData.formType === 'select' ? (
                <div
                  className={cn(
                    'flex flex-col gap-5 mb-5 mt-[20px]',
                    currentStepData.field.length > 1 && 'flex-row',
                  )}
                >
                  {items.inputs.map((input: StepInput, i: number) => (
                    <div
                      key={i}
                      onClick={() => handleSelect(input.name as keyof FormData, input.value)}
                      className={cn(
                        'w-full text-lg h-[75px] flex items-center px-6 justify-start cursor-pointer border rounded-[10px]',
                        watchedValues[input.name as keyof FormData] === input.value &&
                          'bg-[#0daca3] text-white',
                        currentStepData.field.length > 1 && 'justify-center',
                      )}
                    >
                      <p>{input.value}</p>
                    </div>
                  ))}
                </div>
              ) : currentStepData.formType === 'form' ? (
                <div className="space-y-4 mt-4">
                  {items.inputs.map((input: StepInput, i: number) => (
                    <div key={i}>
                      <Label htmlFor={input.value}>{input.name}</Label>
                      <Input id={input.value} {...register(input.value as keyof FormData)} />
                      {errors[input.value as keyof FormData] && (
                        <p className="text-red-500">
                          {errors[input.value as keyof FormData]?.message as string}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <div className="w-full flex justify-between mt-5">
            {currentStep > 1 && (
              <Button onClick={() => setCurrentStep(currentStep - 1)} variant="ghost">
                <ArrowLeft />
              </Button>
            )}
            <Button
              disabled={!isValid && currentStepData?.formType === 'form'} // Disable next if invalid on form step
              onClick={() => setCurrentStep(currentStep + 1)}
              variant="outline"
              type={currentStepData?.formType === 'form' ? 'submit' : 'button'}
            >
              Next <ArrowRight />
            </Button>
          </div>
        </form>
      ) : (
        <FinalStep formData={watchedValues as FormData} />
      )}
    </div>
  )
}

export default MultiStepForm
