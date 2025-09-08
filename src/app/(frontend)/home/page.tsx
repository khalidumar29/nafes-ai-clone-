import Navbar from '@/components/shared/Navbar'
import Articles from './components/Articals'
import Assenting from './components/Assestint'
import Client from './components/Client'
import CompeteBetter from './components/CompeteBetter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import WorkFlow from './components/WorkFlow'

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Navigation Header */}
      <Navbar />
      <Hero />
      <Trusted />
      <CompeteBetter />
      <WorkFlow />
      <Client />
      <Articles />
      <Assenting />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
