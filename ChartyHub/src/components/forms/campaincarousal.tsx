import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Carousalcard from "../cards/CarousalCard"
function Campaincarousal() {
  return (
<Carousel className="w-full !mt-16 ">
  <CarouselContent >
  <CarouselItem className=" md:basis-1/2 !mr-2 shadow-2xl !mb-3 lg:basis-1/3 text-center h-[450px]">
 <Carousalcard/>
  </CarouselItem>
  <CarouselItem className=" md:basis-1/2 !mr-2 shadow-2xl !mb-3 lg:basis-1/3 text-center h-[450px]">
 <Carousalcard/>
  </CarouselItem>  <CarouselItem className=" md:basis-1/2 !mr-2 shadow-2xl !mb-3 lg:basis-1/3 text-center h-[450px]">
 <Carousalcard/>
  </CarouselItem>
  </CarouselContent>
  {/* <CarouselPrevious />
  <CarouselNext /> */}
</Carousel>

  )
}

export default Campaincarousal