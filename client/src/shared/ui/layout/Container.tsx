import Col from "./Col";
import Row from "./Row";
import styles from "./style/container.module.css";
interface IContainerProps {
    children: React.ReactNode;
    contentHeight?:
        | "max-content"
        | "min-content"
        | "100%"
        | "75%"
        | "50%"
        | "25%";
    contentWidth?:
        | "max-content"
        | "min-content"
        | "100%"
        | "75%"
        | "50%"
        | "25%";
}

const Container: React.FC<IContainerProps> = ({
    children,
    contentHeight = "auto",
    contentWidth,
}) => {
    const hasRow =
        Array.isArray(children) &&
        children.some(
            (child) => child && (child.type === Row || child.type === Col)
        );

    const flexDirection = hasRow ? "row" : "column";
    console.log(hasRow);
    return (
        <div
            style={{
                flexDirection,
                height: contentHeight,
                width: contentWidth,
            }}
            className={styles.container}
        >
            {children}
        </div>
    );
};

export default Container;
