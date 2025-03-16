import Main from '@/components/layout/Main'
import Header from '../components/layout/Header'
import About from './About'
import FeaturedCampaigns from './FeaturedCampaigns'

function Home() {
  return (<>
   <Header />
   <Main/>
   <About/>
   <FeaturedCampaigns/>
   </>
  )
}

export default Home