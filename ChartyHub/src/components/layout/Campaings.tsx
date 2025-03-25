import useAllCampaings from "@/lib/store/AllCampaings.store"
import Carousalcard from "../cards/CarousalCard"
import TextHome from "../cards/TextHome"
import { useEffect } from "react"

function Campaings() {
    const {allCampaigns,getAllCampaings,loading}=useAllCampaings()
    useEffect(() => {
        getAllCampaings()
    }, [])
    return (<>
        <div className="relative  bg-cover bg-center h-96 flex justify-center items-center" style={{ backgroundImage: "url('/hero2.png')" }} >
            <TextHome text="All Campaigns" size="text-5xl" />

        </div>
        <div className="!z-10 !p-8 w-full !mt-10 ">
            <div className="flex justify-center ">
                <div className="!mt-1  w-full flex justify-center flex-wrap max-w-6xl  !px-4 !pb-28 ">
                    {loading ? <div>Loading...</div>:allCampaigns.map((el) => {
                        return (
                            <div className=" w-[350px] !mr-2 shadow-xl !mb-3 text-center h-[450px]">
                                <Carousalcard el={el} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    </>
    )
}

export default Campaings