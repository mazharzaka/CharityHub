import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Carousalcard from "../cards/CarousalCard"
import { useEffect, useState } from "react"
import useCampaignsFeatured from "@/lib/store/Campaginfeatured"
import { Progress } from "@radix-ui/react-progress"
// import TextHome from "../cards/TextHome"
function Campaincarousal() {
  const [progress, setProgress] = useState(13)
  const {campaignsFeatured,getAll,loading}=useCampaignsFeatured()
  useEffect(()=>{
    getAll()
    console.log("campaignsFeatured:", campaignsFeatured);
    const timer = setTimeout(() => setProgress(99), 500)
    return () => clearTimeout(timer)

  },[])
  if (loading) return <Progress value={progress} className="w-[60%]" />
  return (
<Carousel className="!z-10 !p-8 w-full !mt-10 ">
  <CarouselContent > {campaignsFeatured?.map((e,i)=> 
  <CarouselItem className=" md:basis-1/2 !mr-2 shadow-xl !mb-3 lg:basis-1/3 text-center h-[450px]">
<Carousalcard key={i} el={e}/>
  </CarouselItem>
  )}
  </CarouselContent>

  {/* <CarouselPrevious />
  <CarouselNext /> */}
</Carousel>

  )
}

export default Campaincarousal