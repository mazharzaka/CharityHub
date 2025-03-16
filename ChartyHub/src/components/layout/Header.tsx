import { Facebook, Github, Linkedin, MailPlus } from "lucide-react"
import Icons from "../forms/Icons"
import Link from "../forms/Link"
import Label from "../forms/Label"
import Logo from "../forms/Logo"
import Navs from "../cards/Navs"
import navLinks from "../../types/NavLinks"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (<>
    <div className={`w-full ${isScrolled&&"hidden z-50"} h-16 bg-white border-b-[1px] border-[#f0f1f2]`}>
      <div className='flex items-center h-full w-full justify-between !py-2 !px-8'>
        <div className="flex">
          <Label Mtitle="Phone" content="+201104998568" />
          <Label Mtitle="Email" content="mazharmohamed566@gmail.com" />
          <Icons component={[<Facebook className="!ml-4 transition-all duration-300 transform hover:text-[#09cc7f] hover:scale-x-[-1]" size={24} />, <Github className="!ml-4 transform hover:text-[#09cc7f] hover:scale-x-[-1]" size={24} />, <MailPlus className="!ml-4 transform hover:text-[#09cc7f] hover:scale-x-[-1]" size={24} />, <Linkedin className="!ml-4 transform hover:text-[#09cc7f] hover:scale-x-[-1]" size={24} />]} />
        </div>
        <div className="flex">
          <Link content="Register" className={true} />
          <Link content="Login" className={false} />

        </div>
      </div>
    </div>
    <div className={`w-full ${isScrolled&&"fixed z-50"} h-24 transition-all duration-300 bg-white shadow-xl shadow-[rgba(25,25,25,0.1)]`} >
      <div className='flex items-center  h-full w-full justify-between !py-2 !px-8'>
        <Logo />
      <div className="flex">
        <Navs items={navLinks}/>
       <Button className="w-44 h-16 text-xl text-white bg-[#09cc7f] hover:bg-[#24ac75]">Donate</Button>
      </div>
      </div>
      </div>

  </>
  )
}

export default Header