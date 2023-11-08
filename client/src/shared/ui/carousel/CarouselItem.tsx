import styles from "./styles/carousel-item.module.css";

const CarouselItem = () => {
    return (
        <div className={styles.carouselItemContainer}>
            <div className={styles.containerBanner}>
                <div className={styles.textContainer}>
                    <div className={styles.headerBanner}>Детские игрушки</div>
                    <div className={styles.textBanner}>Какой то текст</div>

                    <button className={styles.btn}>Купить</button>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
