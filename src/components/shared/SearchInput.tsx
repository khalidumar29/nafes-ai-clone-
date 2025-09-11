import { Search } from 'lucide-react'
import { Input } from '../ui/input'

const SearchInput = () => {
  return (
    <div className="relative">
      <Input placeholder="Search for an Artical" className="py-3 pl-3 pr-7 h-fit" />
      <Search className="absolute top-1/2 right-2 -translate-y-1/2 w-4" />
    </div>
  )
}

export default SearchInput
