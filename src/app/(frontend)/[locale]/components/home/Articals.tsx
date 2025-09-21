import Blogs from './Blogs'

const Articles = ({ locale }: { locale: string }) => {
  return (
    <div className="container">
      <div className="sm:w-1/2">
        <h1 className="font-bold text-[64px] mb-[45px] leading-[65px]">
          Recent Articles <br></br>from Our Blog
        </h1>
      </div>
      <Blogs locale={locale} />
    </div>
  )
}

export default Articles
