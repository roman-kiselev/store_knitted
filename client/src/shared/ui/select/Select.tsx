import React from "react";
import styles from "./styles/select.module.css";

interface ISelectProps {
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelectProps> = ({ onChange, options, value }) => {
    // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     onChange(e.target.value);
    // };

    return (
        <select className={styles.select} value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
