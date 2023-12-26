import styles from "./styles/RowB.module.css";

interface RowBProps {
    children: React.ReactNode;
}

const RowB: React.FC<RowBProps> = ({ children }) => {
    return <div className={styles.row}>{children}</div>;
};

export default RowB;
