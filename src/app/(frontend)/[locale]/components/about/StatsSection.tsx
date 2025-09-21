'use client'

interface StatItem {
  number: string
  label?: string
}

interface StatsProps {
  stats: StatItem[]
  backgroundGradient?: string
  textColor?: string
  direction?: 'ltr' | 'rtl'
}

const StatsSection = ({ stats = [], textColor = 'white', direction = 'rtl' }: StatsProps) => {
  return (
    <section className="container mb-28">
      <div
        className={`flex sm:flex-row flex-col justify-between items-center m-0 mx-auto py-[40px] px-[20px] rounded-[12px] text-center ${direction === 'rtl' ? 'rtl' : 'ltr'}`}
        style={{
          background: 'linear-gradient(92.16deg, #0f5da7 43.64%, #250f8d 134.77%)',
          color: textColor || 'white',
        }}
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center">
            <div className="text-center">
              <h2 className="text-[50px] font-bold m-0 mb-[8px]">{stat.number}</h2>
              <p className="text-[18px] m-0 opacity-50">{stat.label}</p>
            </div>
            {idx < stats.length - 1 && <div className="w-[1px] h-[60px] bg-white/30 mx-4"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
