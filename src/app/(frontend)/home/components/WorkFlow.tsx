import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import tt from '../../../../../public/images/tt.webp'
const WorkFlow = () => {
  const data = [
    'Design custom workflows aligned with your internal processes',
    'Track progress and bottlenecks using visual dashboards',
    'Collaborate in real-time with notifications and updates',
    'Assign roles, tasks, and deadlines across departments',
    'Ensure accountability and compliance through audit trails and approvals',
  ]
  return (
    <div className="container">
      <div className="w-1/2">
        <h1 className="font-bold text-[64px] mb-[45px]">
          Nafes Workflow <br></br>{' '}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            Manager
          </span>
        </h1>
        <p className="text-sm text-[#212529] leading-[1.5]">
          The Workflow Manager by Nafes is a powerful add-on designed to help organizations plan,
          assign, and track every step of their tendering process — from opportunity identification
          to final bid submission.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 ">
        <div className=" w-[488px] flex flex-col gap-[30px] justify-center items-center">
          <p>
            Built specifically for teams working on government and enterprise tenders, the Workflow
            Manager enables you to:
          </p>
          <div className="bg-[#dff1ef] rounded-[24px] p-5 flex flex-col gap-4">
            {data?.map((data, i) => (
              <div key={i} className="flex">
                <MoveUpRight className="text-[#0daca4] mr-2" />
                <p>{data}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src={tt} alt="tt" width={400} height={400} className="w-[90%] h-[600px]"></Image>
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
