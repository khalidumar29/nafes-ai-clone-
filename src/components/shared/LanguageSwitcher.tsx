'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: string) => {
    const segments = pathname.split('/')
    segments[1] = lang
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Globe className="w-5 h-5 text-gray-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[8px] p-3 ml-24 min-w-[150px]">
        <DropdownMenuItem
          className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-3 hover:!bg-[#c2e1ff] cursor-pointer rounded-[10px]"
          onClick={() => switchLanguage('ar')}
        >
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          className="mb-0 w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none hover:!bg-[#c2e1ff] cursor-pointer rounded-[10px]"
          onClick={() => switchLanguage('en')}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
