// import { Links } from "react-router";

import Ilink from "@/types/Link"

function Link({content, className}: Ilink) {
  return (
    <div className={className ? "text-sm text-[#687693] !ml-4 !pr-4 border-r-[1px] border-[#687693]" : "text-sm text-[#687693] !ml-4 !pr-4"}>{content}</div>
  )
}

export default Link