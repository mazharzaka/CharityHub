import Ilable from "@/types/label"

function Label({Mtitle,content}:Ilable) {
  return (
    <div className="text-sm text-[#687693] !ml-4 !pr-4 border-r-[1px] border-[#687693]">{Mtitle} : {content}</div>
  )
}

export default Label