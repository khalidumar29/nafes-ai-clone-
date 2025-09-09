const Client = () => {
  return (
    <div className="py-20 px-6 bg-[#e6f7f6]  mb-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16">
          Our Clients Feedback
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-teal-200 relative">
            {/* 5 Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-orange-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              The platform has been transformative in how we access data and make our analysis.
            </p>

            {/* User Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* Client Info */}
            <p className="text-gray-500 text-sm text-center">
              Diya Rababah - Head of Sales at Cloud Solutions
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-teal-200 relative">
            {/* 5 Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-orange-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              The Nafes platform completely changed the way we handle government tenders. Thanks to
              smart data analysis, we were able to easily identify th...
            </p>

            {/* User Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* Client Info */}
            <p className="text-gray-500 text-sm text-center">
              Mohammad Al Salman - CEO of Rodavan Events Management
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-teal-200 relative">
            {/* 5 Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-orange-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              Nafes wasn&apos;t just a platform... it was a complete transformation in how we
              approach tenders. Instead of wasting time searching and analyzin...
            </p>

            {/* User Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* Client Info */}
            <p className="text-gray-500 text-sm text-center">
              Taher Irshaid - Head of Planning and Strategy at Trend Public Communication Agencyand
              Stra
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3">
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Client
