import { TiDelete } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { delRowParams, editParams } from "../../../shared/models";
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
    const dispatch = useAppDispatch();
    const { createPattern } = useAppSelector((store) => store.form);
    const findedData = createPattern?.params?.find(
        (item) => item.index === index
    );

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
                {createPattern.params.length > 0 && (
                    <>
                        <Row m={5}>
                            <Input
                                styleLabel={{
                                    width: "max-content",
                                    marginRight: 10,
                                }}
                                value={findedData?.nameRu}
                                resetMaxWidth
                                label="RU"
                                onChange={(e) =>
                                    dispatch(
                                        editParams({
                                            index,
                                            nameRu: e.target.value,
                                            nameEng: findedData?.nameEng || "",
                                        })
                                    )
                                }
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
                                value={findedData?.nameEng}
                                onChange={(e) =>
                                    dispatch(
                                        editParams({
                                            index,
                                            nameEng: e.target.value,
                                            nameRu: findedData?.nameRu || "",
                                        })
                                    )
                                }
                            />
                        </Row>
                    </>
                )}
            </Col>
            <Col
                m={5}
                centerHorizontal
                centerVertical
                contentWidth="5%"
                className={styles.containerDel}
            >
                <TiDelete
                    size={30}
                    color="red"
                    onClick={() => dispatch(delRowParams(index))}
                />
            </Col>
        </Row>
    );
};

export default InputRuEng;
