// import React from 'react'

import ILocation from "@/types/Location"
import TextHome from "../cards/TextHome"
import Droplist from "../forms/Droplist"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import LocationPicker from "../cards/Map"

function RequestForm() {
    const [location, setLocation] = useState<ILocation>({
        latitude: 0,
        longitude: 0,
        address: "",
    });
    return (
        <div className="flex justify-center">
            <div className="max-w-4xl w-full  !p-8 space-y-6 ">
                <div className=" w-full !p-6 space-y-6">
                    <Card>
                        <CardContent className="!p-8 !space-y-4">
                            <TextHome text="Submit a request for assistance" hover={true} size="text-xl" />
                            <Textarea placeholder="Write a request" />
                            <Input type="number" placeholder=" The amount or quantity required " required min="1" />
                            <div>
                                <Label>Currency</Label>
                                <Droplist donationType={['USD', 'EGP']} />
                            </div>
                            <div>
                                <Label>Type</Label>
                                <Droplist donationType={['money', 'material', 'volunteer', 'service']} />
                            </div>
                            <LocationPicker setLocation={setLocation} location={location} />
                            <Button className="w-full text-2xl text-white !mt-4 !py-6 bg-[#09cc7f] hover:bg-[#24ac75]">Add Request</Button>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default RequestForm