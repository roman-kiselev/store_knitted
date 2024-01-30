import { Outlet } from "react-router";
import { Item, ItemChild, Layout, LeftMenu } from "../../../shared/ui";
import styles from "./styles/admin-home-page.module.css";
const AdminHomePage = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.leftMenuContainer}>
                    <LeftMenu>
                        <Item title="Мастер класс">
                            <ItemChild
                                path="/admin/patterns/createPatterns"
                                titleLink="Создать"
                            />
                            <ItemChild
                                path="/admin/patterns/list"
                                titleLink="Список"
                            />
                        </Item>
                        <Item title="Товары">
                            <ItemChild
                                path="/admin/products/createProduct"
                                titleLink="Создать"
                            />
                            <ItemChild
                                path="/admin/products/list"
                                titleLink="Список"
                            />
                        </Item>
                        <Item title="Слайды">
                            <ItemChild
                                path="/admin/slides/createSlide"
                                titleLink="Создать"
                            />
                            {/* <ItemChild
                                path="/admin/products/list"
                                titleLink="Список"
                            /> */}
                        </Item>
                    </LeftMenu>
                </div>
                <div className={styles.contentContainer}>
                    <Outlet />
                </div>
            </div>
        </Layout>
    );
};

export default AdminHomePage;
