import styles from "./styles/spin.module.css";

const Spin = () => {
    return (
        <div className={styles.containerLoader}>
            <span className={styles.loader}></span>
        </div>
    );
};

export default Spin;
