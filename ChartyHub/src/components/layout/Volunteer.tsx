// import React from 'react'

import Headline from "@/components/cards/Headline"
import TextHome from "@/components/cards/TextHome"
import VolunteerCarousal from "@/components/forms/VolunteerCarousal"

function Volunteer() {
    return (
            <div className="flex w-full justify-center">
                <div className="!mt-24  w-full  max-w-6xl  !px-4 ">
                    <div className="flex items-center flex-col">
                        <div className="md:w-[650px] text-center">
                            <Headline text="What we are doing" size="text-3xl" />
                            <TextHome text="Our Expert Volunteer Alwyes ready" size="text-4xl" />
                        </div>
                        <VolunteerCarousal />
                    </div>
                </div>
            </div>
        
    )
}

export default Volunteer