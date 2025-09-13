import { cn } from '@/utilities/ui'
import FeatureIcon from './FeatureIcon'
import MediaPart from './MediaPart'

const FeaturesCard = ({ item, i }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className={cn('space-y-6', i % 2 !== 0 && 'lg:order-2')}>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{item.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{item.des}</p>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {item.icons.map((iconItem) => (
              <FeatureIcon iconItem={iconItem} key={iconItem.id} />
            ))}
          </div>
          <div className="text-sm text-gray-500">{item.iconText}</div>
        </div>
      </div>
      <div className={cn('relative', i % 2 !== 0 && 'lg:order-1')}>
        <MediaPart />
      </div>
    </div>
  )
}

export default FeaturesCard
