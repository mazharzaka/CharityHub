import DonationTypeSelectorProps from "@/types/DonationTypeSelectorProps";
import { useState } from "react";

function Droplist({  donationType }: DonationTypeSelectorProps) {
    const [selected, setSelected] = useState<string>(donationType[0]);
    return (
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full !p-2 border rounded-md">
            {donationType?.map((e: string) => {
                return <option value={e}>{e}</option>
            })}
        </select>
    );

}

export default Droplist