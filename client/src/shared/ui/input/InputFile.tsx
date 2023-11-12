import React from "react";
import { Row } from "../layout";
import styles from "./styles/input-file.module.css";

interface InputFileProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: React.FC<InputFileProps> = ({ onChange }) => {
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
                <span>Выбор файла</span>
                <input
                    className={styles.fileContainer}
                    type="file"
                    onChange={onChange}
                    accept="image/*"
                    multiple
                    lang="ru"
                />
            </label>
        </Row>
    );
};

export default InputFile;
