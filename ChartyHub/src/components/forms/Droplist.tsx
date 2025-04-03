import { useState, useEffect } from "react";

interface DroplistProps {
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
}

function Droplist({ options, value, onChange }: DroplistProps) {
    const [selected, setSelected] = useState<string>(value || options[0]);

    useEffect(() => {
        if (value !== undefined) {
            setSelected(value);
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelected(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <select 
            value={selected} 
            onChange={handleChange} 
            className="w-full !p-2 border rounded-md"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Droplist;
