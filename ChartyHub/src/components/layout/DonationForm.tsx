// import React from 'react'

import { useState } from "react";
import Headline from "../cards/Headline"
import TextHome from "../cards/TextHome"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Droplist from "../forms/Droplist";
import { Banknote, CreditCard, Receipt } from "lucide-react";
import { useParams } from "react-router";
import { Textarea } from "../ui/textarea";
import useDonationStore from "@/lib/store/Donation.store";
import Donation from "@/types/Donation";
import { jwtDecode } from "jwt-decode";

function DonationForm() {
    const [amount, setAmount] = useState<number>(50);
    const [anonymous, setAnonymous] = useState<boolean>(true);
    const [paymentMethod, setPaymentMethod] = useState<string>("cash");
    const [message, setmessage] = useState<string>("");
    const { id } = useParams<{ id: string }>();
    const [donationType, setDonationType] = useState<string>("one-time");
    const [currency, setCurrency] = useState<string>("USD");
    const { addDonation } = useDonationStore()
    const Submit = () => {
        const token = localStorage.getItem("token")
        //    console.log(token);
        interface DecodedToken {
            user: {
                user_id: string;
            };
        }

        const decode = jwtDecode<DecodedToken>(token as string);
       

        const donationData = {
            donorId:decode.user.user_id,
            campaignId: id,
            amount: amount,
            currency: currency,
            donationType: donationType,
            paymentMethod: paymentMethod,
            message: message,
            anonymous: false
            //   "transactionId": "65f456def789abc123456ghi"  
        }
        console.log(donationData);

        addDonation(donationData as unknown as Donation);
    }
    return (
        <div className="flex justify-center">
            <div className="max-w-4xl w-full  !p-8 space-y-6 ">
                <div className="flex w-full  !p-8 space-y-6 items-center flex-col">
                    <Headline text="Make a Donation" size="text-3xl" />
                    <p className="text-gray-600 text-center">Your contribution makes a difference!</p>
                </div>
                <div className="max-w-4xl w-full !p-6 space-y-6">
                    <Card className=" !my-5 w-full">
                        <CardContent className="!p-8 !space-y-4">
                            <TextHome text="Select Amount" size="text-xl" />
                            <div className="flex w-full flex-wrap">
                                {[10, 25, 50, 100, 250].map((value) => (
                                    <Button
                                        key={value}
                                        className={`!py-6 !px-24 !m-2 ${amount === value ? "bg-[#072366] text-white" : "bg-gray-200"}`}
                                        onClick={() => setAmount(value)}
                                    >
                                        ${value}
                                    </Button>))}
                            </div>
                            <Textarea placeholder="Write a message" onChange={(e) => setmessage(e.target.value)} />
                            <Input value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                            {/* <Droplist value={donationType}  onChange={(value:string) => console.log(value)
                            }    donationType={['one-time', 'monthly']} /> */}
                            <Droplist value={currency} onChange={setCurrency} options={['USD', 'EGP']} />
                            <Droplist value={donationType} onChange={setDonationType} options={['one-time', 'monthly']} />
                        </CardContent>
                    </Card>
                </div>

                <div className="max-w-4xl w-full !p-6 space-y-6">
                    <Card className="w-full">
                        <CardContent className="!p-8 !space-y-4">
                            <TextHome text="Payment Method" size="text-xl" />
                            <div className="flex !space-x-4 flex-wrap " >
                                <Button onClick={() => setPaymentMethod("credit-card")} className={`flex !mb-2 items-center !space-x-2 !p-4 ${paymentMethod === "credit-card" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                                    <CreditCard size={32} /> <span>Credit Card</span>
                                </Button>
                                <Button onClick={() => setPaymentMethod("paypal")} className={`flex !mb-2 items-center !space-x-2 !p-4 ${paymentMethod === "paypal" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}>
                                    <Receipt /> <span>PayPal</span>
                                </Button>
                                <Button onClick={() => setPaymentMethod("cash")} className={`flex !mb-2 items-center !space-x-2 !p-4 ${paymentMethod === "cash" ? "bg-green-500 text-white" : "bg-gray-200"}`}>
                                    <Banknote /> <span>Cash</span>
                                </Button>
                            </div>
                            <label className="flex items-center !space-x-2">
                                <input type="checkbox" checked={anonymous} onChange={() => setAnonymous(!anonymous)} />
                                <span>Donate Anonymously</span>
                            </label>
                        </CardContent>
                    </Card>
                    <Button onClick={Submit} className="w-full text-2xl text-white !mt-4 !py-8 bg-[#09cc7f] hover:bg-[#24ac75]">Donate Now</Button>
                </div>

            </div>
        </div>)
}

export default DonationForm