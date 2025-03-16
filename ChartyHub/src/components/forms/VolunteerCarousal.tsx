import VolunteerCard from "../cards/VolunteerCard"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
function VolunteerCarousal() {
    return (
        <Carousel className="!z-10 !p-8 w-full !mt-10 ">
            <CarouselContent >
                <CarouselItem className=" md:basis-1/2 !mr-2 shadow-xl !mb-3 lg:basis-1/4 text-center h-[480px]">
                  <VolunteerCard/>
                </CarouselItem>
                <CarouselItem className=" md:basis-1/2 !mr-2 shadow-xl !mb-3 lg:basis-1/4 text-center h-[480px]">
                  <VolunteerCard/>
                </CarouselItem>
                <CarouselItem className=" md:basis-1/2 !mr-2 shadow-xl !mb-3 lg:basis-1/4 text-center h-[480px]">
                  <VolunteerCard/>
                </CarouselItem>
                <CarouselItem className=" md:basis-1/2 !mr-2 shadow-xl !mb-3 lg:basis-1/4 text-center h-[480px]">
                  <VolunteerCard/>
                </CarouselItem>
                <CarouselItem className=" md:basis-1/2 !mr-2 shadow-xl !mb-3 lg:basis-1/4 text-center h-[480px]">
                  <VolunteerCard/>
                </CarouselItem>
            </CarouselContent>
            
            {/* <CarouselPrevious />
  <CarouselNext /> */}
        </Carousel>

    )
}

export default VolunteerCarousal