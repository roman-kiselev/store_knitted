import { useState } from "react";

interface IUseInputFile {
    initialValue?: Blob | MediaSource | null;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useInputFile({
    initialValue = null,
    onChange,
}: IUseInputFile): [
    Blob | MediaSource | null,
    (e: React.ChangeEvent<HTMLInputElement>) => void
] {
    const [value, setValue] = useState<Blob | MediaSource | null>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setValue(file);
        }
    };

    return [value, handleChange];
}

export default useInputFile;
