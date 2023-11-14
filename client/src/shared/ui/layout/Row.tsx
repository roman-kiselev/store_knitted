import React from "react";
import Col from "./Col";
import styles from "./style/row.module.css";
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

interface IRow {
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
    onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Row: React.FC<IRow> = ({
    children,
    contentHeight,
    m,
    mb,
    ml,
    mr,
    mt,
    contentWidth = "100%",
    centerHorizontal,
    centerVertical,
    className,
    onDragStart,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDrop,
    onDragOver,
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
                height: contentHeight,
                width: contentWidth,
                marginTop: `${mt}px`,
                margin: `${m}px`,
                marginBottom: `${mb}px`,
                marginLeft: `${ml}px`,
                marginRight: `${mr}px`,
                // flexDirection,
                justifyContent: centerVertical ? "center" : "flex-start",
                alignItems: centerHorizontal ? "center" : "flex-start",
            }}
            className={[styles.containerRow, className].join(" ")}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            {children}
        </div>
    );
};

export default Row;
