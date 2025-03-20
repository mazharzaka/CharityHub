// import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/Progress";
import TextHome from "@/components/cards/TextHome";
function CampaignByid() {
  return (
    <div className="flex justify-center">
    <div className="max-w-4xl mx-auto !p-6 space-y-6">
      {/* Campaign Banner */}
      <div className="relative w-full h-64  bg-gray-200 rounded-2xl flex items-center justify-center">
      <img src="https://themewagon.github.io/charityworks/assets/img/gallery/case2.png" alt="" className="w-full h-full rounded-2xl" />

      </div>
      
      {/* Campaign Title and Progress */}
      <Card className=" !my-5 ">
        <CardContent className="!p-6  !space-y-4">
          <TextHome text="Campaign Name" size="text-2xl"/>
          <p className="text-gray-600 ">Short description of the campaign explaining the goal.</p>
          <Progress value={75} className="h-4" />
          <div className="flex justify-between  text-gray-700">
            <span>Raised: $7,500</span>
            <span>Goal: $10,000</span>
          </div>
          <Button className="w-full !mt-4 bg-[#09cc7f] hover:bg-[#24ac75]">Donate Now</Button>
        </CardContent>
      </Card>

      {/* Campaign Details */}
      <Card className=" !mb-5 ">
        <CardContent className="!p-6  !space-y-4">
        <TextHome text="About the Campaign" size="text-2xl"/>

          <p className="text-gray-700">Detailed explanation about the campaign, its purpose, and how donations will be used.</p>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card className=" !mb-5 ">
        <CardContent className="!p-6 !space-y-4">
        <TextHome text="Organized by" size="text-2xl"/>

          <p className="text-gray-700">Details about the organizers or team behind the campaign.</p>
        </CardContent>
      </Card>

      {/* Share Section */}
      {/* <div className="flex justify-center !space-x-4">
        <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
        <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
        <FaWhatsapp className="text-green-600 text-2xl cursor-pointer" />
      </div> */}
    </div>
    </div>
  )
}

export default CampaignByid