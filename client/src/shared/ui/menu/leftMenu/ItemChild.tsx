import { Link } from "react-router-dom";
import styles from "./styles/item-child.module.css";

interface IItemChildProps {
    titleLink: string;
    path: string;
}

const ItemChild: React.FC<IItemChildProps> = ({ titleLink, path }) => {
    return (
        <div className={styles.itemChild}>
            <Link to={path}>{titleLink}</Link>
        </div>
    );
};

export default ItemChild;
