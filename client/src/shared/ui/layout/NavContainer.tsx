import styles from "./style/nav-container.module.css";

interface NavContainerProps {
    children: React.ReactNode;
}

const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
    return <div className={styles.navContainer}>{children}</div>;
};

export default NavContainer;
