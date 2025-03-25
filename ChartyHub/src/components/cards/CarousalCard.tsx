// import React from 'react'

// import { Progress } from "@radix-ui/react-progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Progress } from "../ui/Progress"
import TextHome from "./TextHome"
import Link from "../forms/Link"
import { ICampaign } from "@/types/Campaign"
interface CarousalCardProps {
  el: ICampaign;
}

const Carousalcard: React.FC<CarousalCardProps> = ({ el }) => {
 
  if (!el) return <div>Loading...</div>;
  return (<>
    <div className="w-full h-1/2">
      <img src={el.image} alt="" className="w-full h-full" />
    </div>
    <div className="h-12 !p-1 ">
      <TextHome text={el.title} hover={true} size="text-xl" />
      <div className="w-full !mt-7">
        <TooltipProvider >
          <Tooltip >
            <TooltipTrigger>    <div className="!mt-5 w-[300px] flex justify-center"><Progress value={(el.goalAmount > 0 ? Math.round(((el.currentAmount || 0) / el.goalAmount) * 100) : 0)}
              className="w-[90%] " /></div></TooltipTrigger>
            <TooltipContent>
              {(el.goalAmount > 0 ? Math.round(((el.currentAmount || 0) / el.goalAmount) * 100) : 0)}
              %
            </TooltipContent>
          </Tooltip>
        </TooltipProvider></div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link content="Raised:" className={false} />
          <span> <TextHome text={`${el.currentAmount}$`} hover={true} size="text-sx" /> </span>
        </div>
        <div className="flex items-center">
          <Link content="Goal:" className={false} />
          <span> <TextHome text={`${el.goalAmount}$`} hover={true} size="text-sx" /> </span>
        </div>

      </div>
      <div className="flex items-center justify-center">
        <Link content="View" path={`/campaign/${el._id}`} className={false} />
      </div>
    </div></>
  )
}

export default Carousalcard