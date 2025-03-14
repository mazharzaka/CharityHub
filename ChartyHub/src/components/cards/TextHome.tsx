import Itext from "@/types/TextHome"

function TextHome({ text,size="text-6xl" }: Itext) {
    return (

        <div className={`${size} leading-[1.7] font-extrabold uppercase text-[#072366]`}>{text}</div>

    )
}

export default TextHome