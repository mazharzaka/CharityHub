import Itext from "@/types/TextHome"

function TextHome({ text,size="text-6xl" ,hover=false}: Itext) {
    return (

        <div className={`${size} leading-[1.7] font-extrabold uppercase text-[#072366] ${hover&&"hover:text-[#09cc7f]"}`}>{text}</div>

    )
}

export default TextHome