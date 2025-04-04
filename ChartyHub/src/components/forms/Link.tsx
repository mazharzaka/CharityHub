import { Link as RouterLink } from "react-router"

import Ilink from "@/types/Link"

function Link({content, className,path,onClick}: Ilink) {
  return (
    path?   <RouterLink to={path} onClick={onClick} className={className ? "text-xl hover:text-[#09cc7f] text-[#687693] !ml-4 !pr-4 border-r-[1px] border-[#687693]" : "text-xl hover:text-[#09cc7f] text-[#687693] !ml-4 !pr-4"}>{content}</RouterLink>:
    <div onClick={onClick} className={className ? "text-sm text-[#687693] !ml-4 !pr-4 border-r-[1px] border-[#687693]" : "text-sm text-[#687693] !ml-4 !pr-4"}>{content}</div>
  )
}

export default Link