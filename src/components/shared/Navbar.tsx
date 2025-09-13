'use client'
import { cn } from '@/utilities/ui'
import { Globe } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const Navbar = () => {
  const [lang, setLang] = useState('en')
  return (
    <div className="border-b">
      <nav
        className={cn(
          'flex items-center justify-between px-6 py-3  mx-auto container ',
          lang === 'ar' && 'flex-row-reverse',
        )}
      >
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <div className="text-2xl font-bold text-teal-500">
            نوالي
            <br />
            Nafes
          </div>
        </Link>

        <div className={cn('flex gap-20', lang === 'ar' && 'flex-row-reverse')}>
          {/* Navigation Links */}
          <div
            className={cn('hidden md:flex items-center gap-8', lang === 'ar' && 'flex-row-reverse')}
          >
            <Link href="/home" className="text-gray-800 hover:text-teal-500 transition-colors">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-teal-500 transition-colors">
              {lang === 'ar' ? 'عن نوالي' : 'About Nafes'}
            </Link>
            <Link href="/blogs" className="text-gray-800 hover:text-teal-500 transition-colors">
              {lang === 'ar' ? 'المدونات' : 'Blogs'}
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className={cn('flex items-center gap-4', lang === 'ar' && 'flex-row-reverse')}>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                {' '}
                <Globe className="w-5 h-5 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-lg p-3 ">
                <DropdownMenuItem
                  className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-4 hover:!bg-green-100 cursor-pointer"
                  value="ar"
                  onClick={() => setLang('ar')}
                >
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-4 hover:!bg-green-100 cursor-pointer"
                  value="en"
                  onClick={() => setLang('en')}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6">Login</Button>
            <Button
              variant="outline"
              className="border-black text-gray-800 px-6 rounded-[8px] hover:bg-teal-500 hover:border-none hover:text-white"
            >
              Join us
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
