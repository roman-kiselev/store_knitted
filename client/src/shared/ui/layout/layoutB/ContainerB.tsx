import styles from "./styles/containerB.module.css";

interface ContainerBProps {
    children: React.ReactNode;
}

const ContainerB: React.FC<ContainerBProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default ContainerB;
