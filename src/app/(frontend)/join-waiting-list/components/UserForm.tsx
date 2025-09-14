import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import FormButtonContainer from './FormButtonContainer'

const schema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email'),
  company_name: z.string().min(1, 'Company name is required'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
})

type FormData = z.infer<typeof schema>

interface UserFormProps {
  currentStep: number
  formData: Partial<FormData>
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>>
}

const UserForm = ({ currentStep, formData, setCurrentStep, setFormData }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    setFormData({ ...formData, ...data })
    setCurrentStep((prev) => prev + 1)
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <div>
        <Label htmlFor="full_name">Full Name</Label>
        <Input id="full_name" {...register('full_name')} />
        {errors.full_name && <p className="text-red-500">{errors.full_name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="company_name">Company Name</Label>
        <Input id="company_name" {...register('company_name')} />
        {errors.company_name && <p className="text-red-500">{errors.company_name.message}</p>}
      </div>
      <div>
        <Label htmlFor="mobile">Mobile</Label>
        <Input id="mobile" {...register('mobile')} />
        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
      </div>
      <FormButtonContainer
        currentStep={currentStep}
        isDisable={!isValid}
        handleBack={() => setCurrentStep((prev) => prev - 1)}
        handleNext={() => handleSubmit(onSubmit)()}
      />
    </form>
  )
}

export default UserForm
