const WaitingListReason = ({
  title,
  reasons,
  subTitle,
}: {
  title: string
  reasons: { reason: string; id: string }[]
  subTitle: string
}) => {
  return (
    <div className="mt-[50px] mb-[150px] container">
      <h1 className="font-bold text-[40px]">{title}</h1>
      <ul className="list-disc list-inside space-y-2 my-[40px] text-[#555a65] text-[18px]">
        {reasons.map((reason, index) => (
          <li key={index}>{reason.reason}</li>
        ))}
      </ul>
      <p className="text-[#555a65] text-[18px]">{subTitle} </p>
    </div>
  )
}

export default WaitingListReason
