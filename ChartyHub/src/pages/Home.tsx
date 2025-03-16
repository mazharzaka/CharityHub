import Main from '@/components/layout/Main'
import Header from '../components/layout/Header'
import About from './About'
import FeaturedCampaigns from './FeaturedCampaigns'
import Volunteer from './Volunteer'

function Home() {
  return (<>
   <Header />
   <Main/>
   <About/>
   <FeaturedCampaigns/>
   <Volunteer/>
   </>
  )
}

export default Home