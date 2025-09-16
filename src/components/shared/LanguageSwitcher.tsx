'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = ({ setLang }: { setLang: (lang: string) => void }) => {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: string) => {
    setLang(lang)
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
      <DropdownMenuContent className="rounded-lg p-3">
        <DropdownMenuItem
          className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-4 hover:!bg-green-100 cursor-pointer"
          onClick={() => switchLanguage('ar')}
        >
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-4 hover:!bg-green-100 cursor-pointer"
          onClick={() => switchLanguage('en')}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
