import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { IMasterClass } from "../../interface/models/masterClass";
import { ColB } from "../layout";
import cart from "./image/Cart.png";
import view from "./image/view.png";
import styles from "./styles/card.module.css";

interface CardProps {
    col?: "col-3" | "col-4" | "col-6" | "col-12";
    colLg?: "col-lg-3" | "col-lg-4" | "col-lg-6" | "col-lg-12";
    colMd?: "col-md-3" | "col-md-4" | "col-md-6" | "col-md-12";
    colSm?: "col-sm-3" | "col-sm-4" | "col-sm-6" | "col-sm-12";
    params: IMasterClass;
}

const Card: React.FC<CardProps> = ({ col, colLg, params }) => {
    const { language } = useAppSelector((store) => store.language);

    return (
        // <div className={styles.containerOneCard}>
        <ColB col={col} colLg={colLg} colMd="col-md-4" colSm="col-sm-6">
            <div className={styles.Rounded_Rectangle_56}>
                <div className={styles.Rounded_Rectangle_57}>
                    <img
                        className={styles.containerImg}
                        // src="https://images.boosty.to/image/4487b074-b538-47ca-bf5d-2742834a69d0?change_time=1695975289"
                        // alt="img"
                        src={`${process.env.REACT_APP_URL_API}/uploads/pattern/${params.files.mainImg}`}
                        alt="img"
                    />
                </div>

                <div className={styles.containerIcons}>
                    <Link to="cartLink">
                        <img src={cart} alt="cart" className={styles.cart} />
                    </Link>
                    <Link to="view">
                        <img src={view} alt="view" className={styles.view} />
                    </Link>
                </div>

                <div className={styles.containerText}>
                    {language === "ru" ? (
                        <div className={styles.category}>Мастер класс</div>
                    ) : (
                        <div className={styles.category}>Pattern</div>
                    )}
                    {language === "ru" ? (
                        <div className={styles.name}>{params.nameRu}</div>
                    ) : (
                        <div className={styles.name}>{params.nameEng}</div>
                    )}
                    {/* <div className={styles.name}>{params.nameRu}</div> */}
                    {language === "ru" ? (
                        <div className={styles.description}>
                            {params.priceRu}.00 ₽
                        </div>
                    ) : (
                        <div className={styles.description}>
                            {params.priceEng}.00 $
                        </div>
                    )}

                    {/* <div className={styles.price}>{params.priceRu} ₽</div> */}
                </div>
            </div>
        </ColB>
    );
};

export default Card;
