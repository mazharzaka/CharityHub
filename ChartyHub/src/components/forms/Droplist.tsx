import { forwardRef, useEffect, useState } from "react";

interface DroplistProps {
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
}

const Droplist = forwardRef<HTMLSelectElement, DroplistProps>(
    ({ options, value, onChange, name }, ref) => {
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
                ref={ref}
                name={name}
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
);

export default Droplist;
