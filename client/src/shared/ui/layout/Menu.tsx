import React from "react";
import { useAppSelector } from "../../hooks";
import styles from "./style/menu.module.css";
interface MenuProps {
    children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
    const { nav } = useAppSelector((store) => store.nav);
    // TODO - если ширина экрана более 880 отследитьь и изменить nav=false
    return (
        <div
            className={
                nav ? [styles.menu, styles.active].join(" ") : styles.menu
            }
        >
            {children}
        </div>
    );
};

export default Menu;
