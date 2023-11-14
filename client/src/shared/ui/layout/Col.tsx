import React from "react";
import Row from "./Row";
import styles from "./style/column.module.css";

type contentString =
    | "max-content"
    | "min-content"
    | "100%"
    | "95%"
    | "90%"
    | "85%"
    | "80%"
    | "75%"
    | "70%"
    | "65%"
    | "60%"
    | "55%"
    | "50%"
    | "45%"
    | "40%"
    | "35%"
    | "30%"
    | "25%"
    | "20%"
    | "15%"
    | "10%"
    | "5%";

interface ICol {
    children: React.ReactNode;
    contentHeight?: contentString;
    contentWidth?: contentString;
    mt?: number;
    m?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    centerHorizontal?: boolean;
    centerVertical?: boolean;
    className?: string[] | string;
}
const Col: React.FC<ICol> = ({
    children,
    contentHeight,
    contentWidth,
    m,
    mb,
    ml,
    mr,
    mt,
    centerHorizontal,
    centerVertical,
    className,
}) => {
    const hasRow =
        Array.isArray(children) &&
        children.some(
            (child) => child && (child.type === Row || child.type === Col)
        );
    const flexDirection = hasRow ? "row" : "column";

    return (
        <div
            style={{
                // flexDirection,
                marginTop: `${mt}px`,
                margin: `${m}px`,
                marginBottom: `${mb}px`,
                marginLeft: `${ml}px`,
                marginRight: `${mr}px`,
                height: contentHeight,
                width: contentWidth,
                justifyContent: centerVertical ? "center" : "flex-start",
                alignItems: centerHorizontal ? "center" : "flex-start",
            }}
            className={[styles.containerCol, className].join(" ")}
        >
            {children}
        </div>
    );
};

export default Col;
