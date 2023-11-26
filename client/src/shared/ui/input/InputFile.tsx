import React from "react";
import { TypeFile } from "../../enums";
import { Row } from "../layout";
import styles from "./styles/input-file.module.css";

interface InputFileProps {
    header?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    typeFile?: TypeFile;
}

const InputFile: React.FC<InputFileProps> = ({
    onChange,
    header = "Выбор файла",
    typeFile = TypeFile.IMAGE,
}) => {
    return (
        <Row mb={5} mt={5}>
            {/* <input
                className={styles.fileContanier}
                type="file"
                onChange={onChange}
                lang="ru"
                aria-label="Выберите файлы"
                title="Выберите файлы"
            /> */}
            <label className={styles.fileButton}>
                <span>{header}</span>
                <input
                    className={styles.fileContainer}
                    type="file"
                    onChange={onChange}
                    accept={typeFile}
                    multiple
                    lang="ru"
                />
            </label>
        </Row>
    );
};

export default InputFile;
