import { Button } from '@/components/ui/button'
import { FormData } from '@/type'
import { Send } from 'lucide-react'
import { useRouter } from 'next/navigation'

const FinalStep = ({
  formData,
  submissionThanks,
  submissionMessage,
  backToHomeText,
}: {
  formData: FormData
  submissionThanks?: string
  submissionMessage?: string
  backToHomeText?: string
}) => {
  const router = useRouter()
  return (
    <div>
      <div className="flex items-center justify-center min-h-[15em]">
        <Send size={100} />
      </div>
      <h4 className="text-xl font-bold text-center">{submissionThanks}</h4>
      <p className="text-center my-3">{submissionMessage}</p>
      <p className="text-center font-bold">{formData.email}</p>
      <div className="flex items-center justify-center my-3">
        <Button onClick={() => router.push('/')} variant={'outline'}>
          {backToHomeText}
        </Button>
      </div>
    </div>
  )
}

export default FinalStep
