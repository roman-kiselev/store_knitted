import Card from "./Card";
import styles from "./styles/list-card.module.css";

const ListCard = () => {
    return (
        <div className={styles.listCardContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default ListCard;
