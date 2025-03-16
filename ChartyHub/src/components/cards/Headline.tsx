// import React from 'react'

import Itext from "@/types/TextHome"

function Headline({text,size="text-2xl"}:Itext) {
  return (
    <div className={`${size} font-bold text-[#09cc7f] !mb-6`}>
        {text}
</div>
  )
}

export default Headline