import { FormData } from '@/type'
import { cn } from '@/utilities/ui'

interface SelectLabelProps {
  className?: string
  item: string
  selectedItem: string
  name: string
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const SelectLabel: React.FC<SelectLabelProps> = ({
  item,
  selectedItem,
  name,
  setFormData,
  className,
}) => {
  return (
    <div
      onClick={() => setFormData((prev) => ({ ...prev, [name]: item }))}
      className={cn(
        'w-full text-lg h-[75px] flex items-center px-6 justify-center cursor-pointer border rounded-[10px]',
        item === selectedItem && 'bg-[#0daca3] text-white',
        className,
      )}
    >
      <p>{item}</p>
    </div>
  )
}

export default SelectLabel
