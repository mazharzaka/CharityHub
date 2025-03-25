// import React from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/Progress";
import TextHome from "@/components/cards/TextHome";
import { Link, useParams } from "react-router";
import useOneCampaings from "@/lib/store/OneCampaign";
import { useEffect } from "react";
import { Badge, Calendar, Mail, MapPin, Phone, Users } from "lucide-react";
function CampaignByid() {
  const { id } = useParams<{ id: string }>()
  const { oneCampaign, loading, getOneCampaings } = useOneCampaings();
  useEffect(() => {
    getOneCampaings(id)
  }
    , [id])
    const startDate = oneCampaign.startDate ? new Date(oneCampaign.startDate) : null;
const endDate = oneCampaign.endDate ? new Date(oneCampaign.endDate) : null;
const statusColors = {
  pending: "yellow",
  active: "green",
  inactive: "red"
};

  return (
    <div className="flex justify-center">
      {loading ? <p>Loading...</p> :oneCampaign.creator &&
    <div className="max-w-4xl mx-auto !p-6 space-y-6">
      {/* Campaign Banner */}
      <div className="relative w-full h-64  bg-gray-200 rounded-2xl flex items-center justify-center">
      <img src={oneCampaign.image} alt="" className="w-full h-full rounded-2xl" />

      </div>
      
      {/* Campaign Title and Progress */}
      <Card className=" !my-5 ">
        <CardContent className="!p-6  !space-y-4">
          <TextHome text={oneCampaign.title} size="text-2xl"/>
          <p className="text-gray-600 ">{oneCampaign.description}</p>
          {/* <Progress value={75} " /> */}
          <div className="w-full  flex items-center justify-center !mt-7">
        <TooltipProvider  >
          <Tooltip >
            <TooltipTrigger>    <div className="!mt-5 w-[300px] flex justify-center"><Progress className="h-4" value={(oneCampaign.goalAmount > 0 ? Math.round(((oneCampaign.currentAmount || 0) / oneCampaign.goalAmount) * 100) : 0)}
             /></div></TooltipTrigger>
            <TooltipContent>
              {(oneCampaign.goalAmount > 0 ? Math.round(((oneCampaign.currentAmount || 0) / oneCampaign.goalAmount) * 100) : 0)}
              %
            </TooltipContent>
          </Tooltip>
        </TooltipProvider></div>
          <div className="flex justify-between  text-gray-700">
            <span>Raised: ${(oneCampaign.currentAmount || 0)}</span>
            <span>Goal: ${oneCampaign.goalAmount}</span>
          </div><Link to={`/donation/50`}>
          <Button className="w-full !mt-4 bg-[#09cc7f] hover:bg-[#24ac75]">Donate Now</Button></Link> 
        </CardContent>
      </Card>

      {/* Campaign Details */}
      <Card className=" !mb-5 ">
        <CardContent className="!p-6  !space-y-4">
        <TextHome text="About the Campaign" size="text-2xl"/>
        <div className="flex items-center gap-2 mt-3">
            <Calendar className="text-gray-500" />
            {startDate && endDate && <p>From {startDate.toLocaleDateString() } to {endDate.toLocaleDateString() }</p>}
            {/* <p>From {oneCampaign.startDate} to {oneCampaign.endDate}</p>} */}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin className="text-gray-500" />
            <p>{oneCampaign.location?.address}</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Users className="text-gray-500" />
            <p>{oneCampaign.volunteers} متطوع - {oneCampaign.beneficiaries} مستفيد</p>
          </div>
          <div className="flex gap-2 mt-2">
            {oneCampaign.tags?.map((tag, index) => (
              <Badge key={index} className="bg-gray-200 text-gray-700">#{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>


      <Card className=" !mb-5 ">
        <CardContent className="!p-6 !space-y-4">
        <TextHome text="Organized by" size="text-2xl"/>
        <div className="flex items-center !p-4">
          <img src={oneCampaign.creator.profilePicture} alt=" Profile" className="w-20 h-20 rounded-full border-2 border-gray-300" />
          <div className="ml-4">
            <CardTitle>{oneCampaign.creator.Fname} {oneCampaign.creator.Lname}</CardTitle>
            <Badge className={`bg-${statusColors[oneCampaign.creator.status as keyof typeof statusColors]}-500 text-white !px-2 !py-1 rounded-full !mt-1`}>
              {oneCampaign.creator.status}
            </Badge>
          </div>
        </div>
          <div className="flex items-center gap-2 !mt-2">
            <Mail className="text-gray-500" />
            <p>{oneCampaign.creator.email}</p>
          </div>
          <div className="flex items-center gap-2 !mt-2">
            <Phone className="text-gray-500" />
            <p>{oneCampaign.creator.phone}</p>
          </div>
          <div className="flex items-center gap-2 !mt-2">
            <MapPin className="text-gray-500" />
            <p>{oneCampaign.creator.address.street}, {oneCampaign.creator.address.city}, {oneCampaign.creator.address.country}</p>
          </div>
          {/* <div className="!mt-4 flex gap-2">
            <Button variant="default">تعديل البيانات</Button>
            <Button variant="outline">إرسال رسالة</Button>
          </div> */}
        </CardContent>
      </Card>

      {/* Share Section */}
      {/* <div className="flex justify-center !space-x-4">
        <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
        <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
        <FaWhatsapp className="text-green-600 text-2xl cursor-pointer" />
      </div> */}
    </div>}
    </div>
  )
}

export default CampaignByid