import styles from "./styles/left-menu.module.css";

interface ILeftMenuProps {
    children: React.ReactNode;
}

const LeftMenu: React.FC<ILeftMenuProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftMenuContainer}>
                {/* <Item title="Мастер класс">
                    <ItemChild path="/createClass" titleLink={"Создать"} />
                </Item>
                <Item title="Каталог">
                    <ItemChild path="/create" titleLink="Создать карточку" />
                </Item> */}
                {children}
            </div>
        </div>
    );
};

export default LeftMenu;
