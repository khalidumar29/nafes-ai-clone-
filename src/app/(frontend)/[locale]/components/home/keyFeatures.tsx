'use client'

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

type Icon = {
  id: string
  icon: string
  backgroundColor: string
}

type Feature = {
  id: string
  title: string
  description: string
  iconText: string
  icons: Icon[]
  video: {
    url: string
  }
}

type KeyFeaturesBlockProps = {
  title: string
  subtitle: string
  features: Feature[]
}

const KeyFeatures = ({ title, subtitle, features = [] }: KeyFeaturesBlockProps) => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="max-w-6xl px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">{title}</h1>
          <p className="text-xl text-gray-600 text-center">{subtitle}</p>
        </div>

        <div className="space-y-24">
          {features.map((feature, i) => (
            <div key={feature.id} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={cn('space-y-6', i % 2 !== 0 && 'lg:order-2')}>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {feature.icons.map((iconItem) => (
                      <div
                        key={iconItem.id}
                        className={cn(
                          'w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm border-2 border-white',
                          iconItem.backgroundColor,
                        )}
                      >
                        {iconItem.icon}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">{feature.iconText}</div>
                </div>
              </div>
              <div className={cn('relative', i % 2 !== 0 && 'lg:order-1')}>
                <div className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-200 overflow-hidden">
                  {feature.video?.url && (
                    <video
                      className="w-full h-72 rounded-2xl object-cover"
                      src={feature.video.url}
                      loop
                      muted
                      autoPlay
                      playsInline
                    ></video>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
