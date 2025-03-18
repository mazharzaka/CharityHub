// import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/Progress";
function CampaignByid() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Campaign Banner */}
      <div className="relative w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
        <span className="text-xl font-semibold">Campaign Image</span>
      </div>
      
      {/* Campaign Title and Progress */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">Campaign Title</h1>
          <p className="text-gray-600">Short description of the campaign explaining the goal.</p>
          <Progress value={75} className="h-4" />
          <div className="flex justify-between text-gray-700">
            <span>Raised: $7,500</span>
            <span>Goal: $10,000</span>
          </div>
          <Button className="w-full mt-4">Donate Now</Button>
        </CardContent>
      </Card>

      {/* Campaign Details */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold">About the Campaign</h2>
          <p className="text-gray-700">Detailed explanation about the campaign, its purpose, and how donations will be used.</p>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Organized by</h2>
          <p className="text-gray-700">Details about the organizers or team behind the campaign.</p>
        </CardContent>
      </Card>

      {/* Share Section */}
      {/* <div className="flex justify-center space-x-4">
        <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
        <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
        <FaWhatsapp className="text-green-600 text-2xl cursor-pointer" />
      </div> */}
    </div>
  )
}

export default CampaignByid