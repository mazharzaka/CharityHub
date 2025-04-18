import Headline from "@/components/cards/Headline"
import TextHome from "@/components/cards/TextHome"
import Image from "@/components/forms/Image"
import SmallImage from "@/components/forms/SmallImage"
import { Button } from "@/components/ui/button"

function About() {
  return (
    <div className="flex w-full justify-center bg-[#F8FCFF]">
    <div className="flex w-full  max-w-6xl  !px-4 !mt-24">
      <div className="w-full ">
        <div className="w-[400px]">
          <Headline text="About Our Foundetion"   />
          <TextHome text="We Are In A Mission To Help Helpless" size="text-4xl" />
          <p className="text-[#64676c] text-[16px] leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsum consequuntur nihil tempore, debitis, quisquam totam quam fuga mollitia in iusto veniam assumenda 
             obcaecati delectus adipisci voluptatibus dolorem magnam cumque nostrum.
          </p>
<Button className="w-44 h-16 text-xl !mt-8 !mb-2 text-white bg-[#09cc7f] hover:bg-[#24ac75]">About Us</Button>

        </div>
      </div>
      <div className="relative">
        <Image/>
        <SmallImage/>
      </div>
      </div></div>
  )
}

export default About