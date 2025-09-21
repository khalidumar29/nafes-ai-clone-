import { Media } from '@/payload-types'
import Image from 'next/image'

type Review = {
  name: string
  role?: string
  feedback: string
  avatar?: Media | null
  rating?: number // 1 to 5 stars
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const stars = review.rating || 5

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#74bafb] relative">
      {/* Stars */}
      <div className="flex justify-center mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 ${i < stars ? 'text-orange-400' : 'text-gray-300'} fill-current`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 text-center leading-relaxed mb-8">{review.feedback}</p>

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        {review.avatar?.url ? (
          <Image
            src={review.avatar.url}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>

      {/* Client Info */}
      <p className="text-gray-500 text-sm text-center">
        {review.name} {review.role ? `- ${review.role}` : ''}
      </p>
    </div>
  )
}

export default ReviewCard
