import Carousalcard from "../cards/CarousalCard"
import TextHome from "../cards/TextHome"

function Campaings() {
    return (<>
        <div className="relative  bg-cover bg-center h-96 flex justify-center items-center" style={{ backgroundImage: "url('/hero2.png')" }} >
            <TextHome text="All Campaigns" size="text-5xl" />

        </div>
        <div className="!z-10 !p-8 w-full !mt-10 ">
            <div className="flex justify-center ">
                <div className="!mt-1  w-full  max-w-6xl  !px-4 !pb-28 ">
                    <div className=" w-[350px] !mr-2 shadow-xl !mb-3 text-center h-[450px]">
                        <Carousalcard />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Campaings