import styles from "./styles/button.module.css";

interface ButtonProps {
    title: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ title, style, onClick }) => {
    return (
        <div style={{ ...style }} className={styles.container}>
            <button onClick={onClick} className={styles.btn}>
                {title}
            </button>
        </div>
    );
};

export default Button;
