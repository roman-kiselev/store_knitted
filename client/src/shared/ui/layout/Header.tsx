import { useAppSelector } from "../../hooks";
import { LinkNav } from "../link";
import HeaderConteinerBottom from "./HeaderConteinerBottom";
import HeaderTop from "./HeaderTop";
import Icons from "./Icons";
import Logo from "./Logo";
import Menu from "./Menu";
import NavContainer from "./NavContainer";
import styles from "./style/header.module.css";

const Header = () => {
    const { language } = useAppSelector((store) => store.language);
    const { isAuth } = useAppSelector((store) => store.auth);
    return (
        <div className={styles.containerHeader}>
            <HeaderTop />
            <HeaderConteinerBottom>
                <NavContainer>
                    <Logo />
                    <Menu>
                        <LinkNav
                            path="/bestsellers"
                            title={language === "en" ? "Home" : "Главная"}
                        />
                        <LinkNav
                            path="/patterns"
                            title={
                                language === "en" ? "Patterns" : "Мастер класс"
                            }
                        />
                        <LinkNav
                            path="/toys"
                            title={language === "en" ? "Toys" : "Игрушки"}
                        />
                        <LinkNav
                            path="/contact"
                            title={language === "en" ? "Contact" : "Контакты"}
                        />
                        <LinkNav
                            path="/about"
                            title={language === "en" ? "About us" : "О нас"}
                        />
                        {isAuth && (
                            <LinkNav
                                path="/admin"
                                title={language === "en" ? "Admin" : "Админ"}
                            />
                        )}
                    </Menu>
                    <Icons />
                </NavContainer>
            </HeaderConteinerBottom>
        </div>
    );
};

export default Header;
