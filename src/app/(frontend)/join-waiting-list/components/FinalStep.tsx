import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { useRouter } from 'next/navigation'

const FinalStep = ({ formData }) => {
  const router = useRouter()
  return (
    <div>
      <div className="flex items-center justify-center min-h-[15em]">
        <Send size={100} />
      </div>
      <h4 className="text-xl font-bold text-center">Thank you for your submission</h4>
      <p className="text-center my-3">
        Our team will review your information and we will contact your email
      </p>
      <p>{formData.email}</p>
      <p className="text-center font-bold">test@email.com</p>
      <div className="flex items-center justify-center my-3">
        <Button onClick={() => router.push('/')} variant={'outline'}>
          Back to Home page
        </Button>
      </div>
    </div>
  )
}

export default FinalStep
