'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Blogs = () => {
  return (
    <div className=" px-6 bg-white pb-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Blog Posts Swiper */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-300 !opacity-100',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-500',
              el: '.blog-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            // className="pb-16"
          >
            {/* Blog Post 1 */}
            <SwiperSlide>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full">
                {/* Blog Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="AI Technology"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-8">
                  {/* Date and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 text-sm">March 11, 2024 - فريق نافس</span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      المناقشات
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed" dir="rtl">
                    هل تتنافس في مزاد علني للفوز بصفقة؟ تعرف على كل شيء حول نظام المزايدات والتعرف
                    على أنواع المزايدات الإلكترونية، وكيفية تطوير استراتيجية رابحة مع دليل نافس
                    الشامل
                  </h3>

                  {/* Read More Button */}
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Blog Post 2 */}
            <SwiperSlide>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full">
                {/* Blog Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Business Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-8">
                  {/* Date and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 text-sm">February 26, 2024 - فريق نافس</span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      منصة عملاء
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed" dir="rtl">
                    اكتشف كل ما تحتاج معرفته حول كيفية عمل المناقصات. نقدم دليل نافس الشامل نظرة
                    عامة على عملية تقديم العروض من البداية إلى النهاية، ويساعدك على اتخاذ قراراتك
                  </h3>

                  {/* Read More Button */}
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Blog Post 3 */}
            <SwiperSlide>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full">
                {/* Blog Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Digital Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-8">
                  {/* Date and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 text-sm">January 15, 2024 - فريق نافس</span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      التحليلات
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed" dir="rtl">
                    تعلم كيفية استخدام التحليلات الذكية لتحسين فرصك في الفوز بالمناقصات الحكومية
                    والخاصة من خلال منصة نافس المتطورة
                  </h3>

                  {/* Read More Button */}
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Blog Post 4 */}
            <SwiperSlide>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full">
                {/* Blog Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Strategy Planning"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-8">
                  {/* Date and Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-500 text-sm">December 20, 2023 - فريق نافس</span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      الاستراتيجية
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed" dir="rtl">
                    دليل شامل لبناء استراتيجية فعالة للمشاركة في المناقصات وزيادة معدل النجاح في
                    الحصول على العقود
                  </h3>

                  {/* Read More Button */}
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Custom Pagination */}
          <div className="blog-pagination flex justify-center space-x-3 mt-8"></div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
