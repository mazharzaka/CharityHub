import { Link } from "react-router"

type NavbarProps = {
    items: { name: string; path: string }[]; 
  };
  

function Navs(items:NavbarProps) {
  return (
    <>
    {items.items.map((e, i) => (
    <Link key={i} to={e.path} className="h-full !px-5 !py-4 text-[#072366] hover:text-[#08CC7F]">{e.name}</Link>))}</>
  )
}

export default Navs