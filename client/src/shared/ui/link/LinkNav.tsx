import { Link } from "react-router-dom";
import styles from "./styles/link-nav.module.css";

interface LinkNavProps {
    path: string;
    title: string;
}

const LinkNav: React.FC<LinkNavProps> = ({ path, title }) => {
    return (
        <div className={styles.itemNav}>
            <Link className={styles.link} to={path}>
                {title}
            </Link>
        </div>
    );
};

export default LinkNav;
