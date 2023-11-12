import React from "react";
import styles from "./styles/one-image.module.css";

interface OneImageProps {
    image: Blob | MediaSource | null;
}

const OneImage: React.FC<OneImageProps> = ({ image }) => {
    return (
        <div className={styles.imageCard}>
            <img
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className={styles.mainImg}
                src={image ? URL.createObjectURL(image) : ""}
                alt="Пока пусто"
            />
        </div>
    );
};

export default OneImage;
