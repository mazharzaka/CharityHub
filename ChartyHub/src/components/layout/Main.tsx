// import React from 'react'

import TextHome from "../cards/TextHome"
import { Button } from "../ui/button"

function Main() {
  return (
   
<div className="relative  bg-cover bg-center h-screen"   style={{ backgroundImage: "url('./h1_hero.png')" }} >
<div className="absolute top-1/3 left-[9.11%] w-[680px] transform flex flex-col  -translate-y-1/2  p-3"> 
        
<TextHome text="Make a Difference Today—Support Those in Need. " />
<Button className="w-44 h-16 text-xl !mt-8 text-white bg-[#09cc7f] hover:bg-[#24ac75]">Donate now</Button>

</div>
</div>
  )
}

export default Main