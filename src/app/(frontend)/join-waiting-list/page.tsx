import WaitingHero from './components/WaitingHero'
import WaitingListReason from './components/WaitingListReason'

const Page = () => {
  return (
    <section className="min-h-screen container">
      <WaitingHero />
      <WaitingListReason />
    </section>
  )
}

export default Page
