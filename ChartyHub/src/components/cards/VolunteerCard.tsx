
import TextHome from "./TextHome"

function VolunteerCard() {
  return (<>
    <div className="w-full ">
      <img src="https://themewagon.github.io/charityworks/assets/img/gallery/team3.png" alt="" className="w-full h-full" />
    </div>
    <div className="h-12 !p-1 ">
      <TextHome text="Providing Healthy Food For The Children" hover={true} size="text-xl" />
      <div className="w-full !mt-2">
      <div className= "text-[#687693] !ml-4 text-xl !pr-4 border-r-[1px] border-[#687693]" >Volunteer leader</div>
      </div>
        
      
    </div></>
  )
}

export default VolunteerCard