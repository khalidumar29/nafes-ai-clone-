import { cn } from '@/utilities/ui'

const SelectLabel = ({ item, selectedItem, name, setFormData }) => {
  return (
    <div
      onClick={() => setFormData((prev) => ({ ...prev, [name]: item }))}
      className={cn(
        'w-full text-lg h-[75px] flex items-center px-6 justify-center cursor-pointer border rounded-[10px]',
        item == selectedItem && 'bg-[#0daca3] text-white',
      )}
    >
      <p>{item}</p>
    </div>
  )
}

export default SelectLabel
