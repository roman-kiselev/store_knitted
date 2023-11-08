import styles from "./style/header-container-bottom.module.css";

interface HeaderConteinerBottomProps {
    children: React.ReactNode;
}

const HeaderConteinerBottom: React.FC<HeaderConteinerBottomProps> = ({
    children,
}) => {
    return <div className={styles.containerBottom}>{children}</div>;
};

export default HeaderConteinerBottom;
