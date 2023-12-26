import styles from "./styles/colB.module.css";

interface ColBProps {
    children: React.ReactNode;
    col?: "col-3" | "col-4" | "col-6" | "col-12";
    colLg?: "col-lg-3" | "col-lg-4" | "col-lg-6" | "col-lg-12";
    colMd?: "col-md-3" | "col-md-4" | "col-md-6" | "col-md-12";
    colSm?: "col-sm-3" | "col-sm-4" | "col-sm-6" | "col-sm-12";
}

const ColB: React.FC<ColBProps> = ({
    children,
    col = "col-12",
    colLg = "col-lg-12",
    colMd = "col-md-12",
    colSm = "col-sm-12",
}) => {
    return (
        <div
            className={
                styles.container +
                " " +
                styles[col] +
                " " +
                styles[colLg] +
                " " +
                styles[colMd] +
                " " +
                styles[colSm]
            }
        >
            {children}
        </div>
    );
};

export default ColB;
