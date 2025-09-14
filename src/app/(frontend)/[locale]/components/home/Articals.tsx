import Blogs from './Blogs'

const Articles = ({ title, articles }: any) => {
  // console.log(props)

  return (
    <div className="container">
      <div className="sm:w-1/2">
        <h1 className="font-bold text-[64px] mb-[45px] leading-[65px]">{title}</h1>
      </div>
      <Blogs articles={articles} />
    </div>
  )
}

export default Articles
