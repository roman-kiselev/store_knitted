import { useAppSelector } from "../../hooks";
import styles from "./style/logo.module.css";

interface LogoProps {
    position?: "start" | "end" | "center";
}

const Logo: React.FC<LogoProps> = ({ position }) => {
    const { nav } = useAppSelector((store) => store.nav);
    return (
        <div
            className={
                nav ? [styles.logo, styles.active].join(" ") : styles.logo
            }
            style={{ justifyContent: position }}
        >
            Teddy_knitted
        </div>
    );
};

export default Logo;
