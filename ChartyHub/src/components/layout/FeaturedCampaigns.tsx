// import React from 'react'

import Campaincarousal from "@/components/forms/campaincarousal"
import Headline from "@/components/cards/Headline"
import TextHome from "@/components/cards/TextHome"



function FeaturedCampaigns() {

  return (
    <div className="relative  bg-cover bg-center " style={{ backgroundImage: "url('/section_bg03.png')" }} >

      <div className="!z-50 flex w-full justify-center">
        <div className="!mt-24  w-full  max-w-6xl  !px-4 !pb-28 ">
          <div className="flex items-center flex-col">
            <div className="md:w-[650px] text-center">
              <Headline text="Featured Campaigns – Make an Impact Today!" size="text-3xl" />
              <TextHome text="Explore our latest Campaigns that we works" size="text-4xl" />
            </div>
            <Campaincarousal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCampaigns