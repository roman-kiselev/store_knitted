import { useState } from "react";

interface IUseInputString {
    initialValue?: string;
    onChange?: (value: string) => void;
}

function useInputString(
    initialValue: string = ""
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    const [value, setValue] = useState<string>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        // if (onChange) {
        //     setValue(newValue);
        // }
    };

    return [value, handleChange];
}

export default useInputString;
