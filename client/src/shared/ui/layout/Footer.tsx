import { Space } from "antd";
import { SocialIcon } from "react-social-icons";
import { RowB } from "./layoutB";
import styles from "./style/footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <RowB>
                <Space>
                    <SocialIcon url="https://www.instagram.com" />
                    <SocialIcon url="https://vk.com/" />
                    <SocialIcon url="https://www.telegram.org/" />
                </Space>
            </RowB>
        </div>
    );
};

export default Footer;
