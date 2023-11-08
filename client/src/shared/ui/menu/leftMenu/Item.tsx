import React, { useState } from "react";
import styles from "./styles/item.module.css";

interface IItemProps {
    children: React.ReactNode;
    title: string;
}

const Item: React.FC<IItemProps> = ({ title, children }) => {
    const [active, setActive] = useState(false);

    return (
        <div className={styles.itemContainer}>
            <div onClick={() => setActive(!active)} className={styles.item}>
                {title}
            </div>
            <div
                className={
                    active
                        ? [styles.itemChildContainer, styles.active].join(" ")
                        : styles.itemChildContainer
                }
            >
                {children}
            </div>
        </div>
    );
};

export default Item;
