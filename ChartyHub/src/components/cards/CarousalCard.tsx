// import React from 'react'

// import { Progress } from "@radix-ui/react-progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Progress } from "../ui/Progress"
import TextHome from "./TextHome"
import Link from "../forms/Link"

function Carousalcard() {
  return (<>
    <div className="w-full h-1/2">
      <img src="https://themewagon.github.io/charityworks/assets/img/gallery/case2.png" alt="" className="w-full h-full" />
    </div>
    <div className="h-12 !p-1 ">
      <TextHome text="Providing Healthy Food For The Children" hover={true} size="text-xl" />
      <div className="w-full !mt-7">
        <TooltipProvider >
          <Tooltip >
            <TooltipTrigger>    <div className="!mt-5 w-[300px] flex justify-center"><Progress value={50} className="w-[90%] " /></div></TooltipTrigger>
            <TooltipContent>
              70%
            </TooltipContent>
          </Tooltip>
        </TooltipProvider></div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link content="Raised:" className={false} />
          <span> <TextHome text="500$" hover={true} size="text-sx" /> </span>
        </div>
        <div className="flex items-center">
          <Link content="Goal:" className={false} />
          <span> <TextHome text="1000$" hover={true} size="text-sx" /> </span>
        </div>
       
      </div>
      <div className="flex items-center justify-center">
          <Link content="View" path="/campaign/52" className={false} />
        </div>
    </div></>
  )
}

export default Carousalcard