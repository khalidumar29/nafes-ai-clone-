'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ children, src, ...props }) => {
  const router = useRouter()
  const locale = router.locale || 'en' // Defaults to 'en' if no locale is set

  return (
    <Link href={`/${locale}/${src}`} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
