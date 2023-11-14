import { Col, Input, Row } from "../../../shared/ui";
import styles from "./styles/input-ru-eng.module.css";

interface InputRuEngProps {
    handleDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDragLeave?: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    handleDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
    index: number;
}

const InputRuEng: React.FC<InputRuEngProps> = ({
    handleDragEnd,
    handleDragEnter,
    handleDragLeave,
    handleDragStart,
    handleDrop,
    handleDragOver,
    index,
}) => {
    return (
        <Row
            onDragStart={handleDragStart}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={styles.container}
            m={5}
        >
            <Col
                className={styles.indexContainer}
                centerHorizontal
                centerVertical
                contentWidth="10%"
                m={5}
            >
                {index}
            </Col>
            <Col centerHorizontal centerVertical contentWidth="80%">
                <Row m={5}>
                    <Input
                        styleLabel={{
                            width: "max-content",
                            marginRight: 10,
                        }}
                        resetMaxWidth
                        label="RU"
                    />
                </Row>
                <Row m={5}>
                    <Input
                        styleLabel={{
                            width: "max-content",
                            marginRight: 10,
                        }}
                        resetMaxWidth
                        label="ENG"
                    />
                </Row>
            </Col>
        </Row>
    );
};

export default InputRuEng;
