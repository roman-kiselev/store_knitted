import { useState } from "react";
import { Input } from "../../../../../shared/ui";
import styles from "./styles/create-patterns.module.css";

const CreatePatterns = () => {
    const [selectedImage, setSelectedImage] = useState<
        Blob | MediaSource | null
    >(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.imageCard}>
                    <img
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        src={
                            selectedImage
                                ? URL.createObjectURL(selectedImage)
                                : ""
                        }
                        alt="Пока пусто"
                    />
                </div>
                <input
                    className={styles.fileContanier}
                    type="file"
                    onChange={handleImageChange}
                />
            </div>
            <div className={styles.formContainer}>
                <h3>Форма добавления мастер класса</h3>
                <Input
                    styleLabel={{ width: "100%" }}
                    label="Наименование мастер класса"
                    containerPosition="column"
                    style={{ width: "80%" }}
                />
            </div>
        </div>
    );
};

export default CreatePatterns;
