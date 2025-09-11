import { Globe } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="border-b">
      <nav className="flex items-center justify-between px-6 py-3  mx-auto container ">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <div className="text-2xl font-bold text-teal-500">
            نوالي
            <br />
            Nafes
          </div>
        </Link>

        <div className="flex gap-20">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="text-gray-800 hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-teal-500 transition-colors">
              About Nafes
            </Link>
            <Link href="/blogs" className="text-gray-800 hover:text-teal-500 transition-colors">
              Blogs
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <Globe className="w-5 h-5 text-gray-600" />
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
