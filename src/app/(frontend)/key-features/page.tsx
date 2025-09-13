import FeaturesCard from './components/FeaturesCard'

const data = [
  {
    id: 1,
    title: 'Two-Tap Logging',
    des: "Add achievements instantly, even with your voice. No more complex forms or time-consuming setup - just tap twice and you're done.",
    icons: [
      {
        id: 1,
        icon: '⚡',
        bgColor: 'bg-blue-100',
      },
      {
        id: 2,
        icon: '🎯',
        bgColor: 'bg-green-100',
      },
      {
        id: 3,
        icon: '📱',
        bgColor: 'bg-purple-100 ',
      },
    ],
    iconText: 'Quick & Easy achievement logging',
  },
  {
    id: 2,
    title: 'Beautiful Timeline',
    des: `Scroll through your personal "feed of wins." Every achievement gets its moment to shine in a beautifully designed timeline that tells your story.`,
    icons: [
      {
        id: 1,
        icon: '📅',
        bgColor: 'bg-green-100',
      },
      {
        id: 2,
        icon: '✨',
        bgColor: 'bg-yellow-100 ',
      },
      {
        id: 3,
        icon: '📊',
        bgColor: 'bg-blue-100',
      },
    ],
    iconText: 'Visual Story of your journey',
  },
  {
    id: 3,
    title: 'Streaks & Badges',
    des: 'Stay motivated with fun rewards and challenges. Build streaks, unlock badges, and celebrate every milestone with gamified achievements.',
    icons: [
      {
        id: 1,
        icon: '🏆',
        bgColor: 'bg-purple-100',
      },
      {
        id: 2,
        icon: '🔥',
        bgColor: 'bg-orange-100',
      },
      {
        id: 2,
        icon: '⭐',
        bgColor: 'bg-yellow-100',
      },
    ],
    iconText: 'Gamified motivation system',
  },
  {
    id: 4,
    title: 'Private & Secure',
    des: 'You own your moments; share only what you choose. Your achievements are end-to-end encrypted by default, with full control to export and share.',
    icons: [
      {
        id: 1,
        icon: '🔒',
        bgColor: 'bg-orange-100',
      },
      {
        id: 2,
        icon: '🛡️',
        bgColor: 'bg-blue-100',
      },
      {
        id: 2,
        icon: '👤',
        bgColor: 'bg-green-100',
      },
    ],
    iconText: 'Your Data stays private',
  },
]
const Page = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-6xl px-6">
        <div className="text-center mb-16 py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Key Features
          </h1>
          <p className="text-xl text-gray-600  text-center">
            Everything you need to turn everyday moments into lasting achievements
          </p>
        </div>
        <div className="space-y-24 ">
          {data.map((item, i) => (
            <FeaturesCard key={item.id} i={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page
