import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/link-product.module.css";

interface ILinkProductProps {
    path: string;
    title: string;
}

const LinkProduct: React.FC<ILinkProductProps> = ({ path, title }) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate(path);
    };

    const isActive = window.location.pathname === `/${path}`;

    return (
        <div className={styles.linkContainer}>
            <Link
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                onClick={handleClick}
                to={path}
            >
                {title}
            </Link>
        </div>
    );
};

export default LinkProduct;
