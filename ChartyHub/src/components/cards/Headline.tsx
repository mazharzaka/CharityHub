// import React from 'react'

import Itext from "@/types/TextHome"

function Headline({text}:Itext) {
  return (
    <div className="text-2xl font-bold text-[#09cc7f] !mb-12">
        {text}
</div>
  )
}

export default Headline