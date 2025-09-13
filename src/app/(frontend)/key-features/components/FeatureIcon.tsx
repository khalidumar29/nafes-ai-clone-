import { cn } from '@/utilities/ui'

const FeatureIcon = ({ iconItem }) => {
  return (
    <div
      className={cn(
        'w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm border-2 border-white',
        iconItem.bgColor,
      )}
    >
      {iconItem.icon}
    </div>
  )
}

export default FeatureIcon
