// import React from 'react'

import Iicons from "@/types/Icon"
// import { Facebook } from "lucide-react"

function Icons({component}:Iicons) {
  return (
    <div className="flex justify-center items-center">
{
    (Array.isArray(component))&&component?.map((e:any)=>{
        return e}
    )
}
    </div>
  )
}
// 
export default Icons