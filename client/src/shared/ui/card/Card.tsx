import { Link } from "react-router-dom";
import cart from "./image/Cart.png";
import view from "./image/view.png";
import styles from "./styles/card.module.css";

const Card = () => {
    return (
        <div className={styles.containerOneCard}>
            <div className={styles.Rounded_Rectangle_56}>
                <div className={styles.Rounded_Rectangle_57}>img</div>
                <div className={styles.containerIcons}>
                    <Link to="cartLink">
                        <img src={cart} alt="cart" className={styles.cart} />
                    </Link>
                    <Link to="view">
                        <img src={view} alt="view" className={styles.view} />
                    </Link>
                </div>
                <div className={styles.containerText}>
                    <div className={styles.category}>Мастер класс</div>
                    <div className={styles.name}>Зайчик</div>
                    <div className={styles.price}>366.00 ₽</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
