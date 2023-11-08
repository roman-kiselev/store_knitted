import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setNav } from "../../models";
import cart from "./img/cart.png";
import styles from "./style/icons.module.css";
const Icons = () => {
    const dispatch = useAppDispatch();
    const { nav } = useAppSelector((store) => store.nav);

    return (
        <div className={styles.iconsContainer}>
            <div
                className={
                    nav
                        ? [styles.cartContainer, styles.active].join(" ")
                        : styles.cartContainer
                }
            >
                <img className={styles.cart} src={cart} alt="cart" />
                <span className={styles.count}>0</span>
            </div>

            {nav ? (
                <AiOutlineClose
                    onClick={() => dispatch(setNav(!nav))}
                    className={styles.hamburger}
                    size={30}
                />
            ) : (
                <AiOutlineMenu
                    onClick={() => dispatch(setNav(!nav))}
                    className={styles.hamburger}
                    size={30}
                />
            )}
        </div>
    );
};

export default Icons;
