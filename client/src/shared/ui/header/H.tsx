import styles from "./styles/header.module.css";

interface IHeaderProps {
    children: React.ReactNode;
}

const H: React.FC<IHeaderProps> = ({ children }) => {
    return <div className={styles.header}>{children}</div>;
};

export default H;
