import { Image } from "antd";
import React from "react";
import { masterClassApi } from "../../../shared/api";
import { TypeFile } from "../../../shared/enums";
import {
    useAppDispatch,
    useAppSelector,
    useInputFile,
} from "../../../shared/hooks";
import { IMasterClass } from "../../../shared/interface";
import {
    editNameEng,
    editNameRu,
    editPriceEng,
    editPriceRu,
    pushParams,
} from "../../../shared/models";
import {
    Button,
    Col,
    Container,
    Input,
    InputFile,
    InputRuEng,
    Row,
} from "../../../shared/ui";
import { AddOneImg } from "../../imgEntities";

interface EditPatternProps {
    dataPattern: IMasterClass;
}

const EditPattern: React.FC<EditPatternProps> = ({ dataPattern }) => {
    const dispatch = useAppDispatch();

    const [createPatternForm, { data }] =
        masterClassApi.useCreatePatternMutation();
    const { createPattern } = useAppSelector((store) => store.form);

    const [mainImageState, setMainImageState] = useInputFile({
        initialValue: null,
    });
    const [fileRuState, setFileRuState] = useInputFile({
        initialValue: null,
    });
    const [fileEngState, setFileEngState] = useInputFile({
        initialValue: null,
    });

    return (
        <Container>
            <Row>
                <Col m={5} contentWidth="30%">
                    {mainImageState ? (
                        <AddOneImg
                            initialValue={mainImageState}
                            onChange={setMainImageState}
                        />
                    ) : (
                        <>
                            <Image
                                width={200}
                                src={`${process.env.REACT_APP_URL_API}/uploads/pattern/${dataPattern.files.mainImg}`}
                            />
                            <AddOneImg
                                initialValue={mainImageState}
                                onChange={setMainImageState}
                                viewImage={false}
                            />
                        </>
                    )}
                </Col>
                <Col m={5} contentWidth="60%">
                    <Row contentHeight="min-content" m={5}>
                        <h3>Форма редактирования мастер класса</h3>
                    </Row>
                    <Row contentHeight="min-content" m={5}>
                        <Input
                            containerPosition="column"
                            label="Наименование мастер класса RU"
                            style={{ width: "80%" }}
                            resetMaxWidth
                            value={createPattern.nameRu}
                            onChange={(e) =>
                                dispatch(editNameRu(e.target.value))
                            }
                        />
                    </Row>
                    <Row contentHeight="min-content" m={5}>
                        <Input
                            containerPosition="column"
                            label="Наименование мастер класса ENG"
                            style={{ width: "80%" }}
                            resetMaxWidth
                            value={createPattern.nameEng}
                            onChange={(e) =>
                                dispatch(editNameEng(e.target.value))
                            }
                        />
                    </Row>
                    <Row contentHeight="min-content" m={5}>
                        <Container>
                            {createPattern.params?.map((item) => (
                                <InputRuEng
                                    key={item.index}
                                    index={item.index}
                                />
                            ))}
                        </Container>
                    </Row>
                    <Row
                        contentHeight="min-content"
                        centerHorizontal
                        centerVertical
                        m={5}
                    >
                        <Button
                            title="Добавить"
                            onClick={() => dispatch(pushParams())}
                        />
                    </Row>
                    <Row
                        m={5}
                        centerHorizontal
                        centerVertical
                        contentHeight="min-content"
                    >
                        <Col m={5}>
                            <Input
                                value={createPattern.priceRu.toString()}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => dispatch(editPriceRu(e.target.value))}
                                styleLabel={{ width: "min-content", margin: 5 }}
                                label="RUB"
                            />
                        </Col>
                        <Col m={5}>
                            <Input
                                value={createPattern.priceEng.toString()}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => dispatch(editPriceEng(e.target.value))}
                                styleLabel={{ width: "min-content", margin: 5 }}
                                label="USD"
                            />
                        </Col>
                    </Row>
                    <Row
                        m={5}
                        centerHorizontal
                        centerVertical
                        contentHeight="min-content"
                    >
                        <Col m={5}>
                            <InputFile
                                typeFile={TypeFile.PDF}
                                header="Файл RU"
                                onChange={setFileRuState}
                            />
                        </Col>
                        <Col m={5}>
                            <InputFile
                                typeFile={TypeFile.PDF}
                                header="Файл ENG"
                                onChange={setFileEngState}
                            />
                        </Col>
                    </Row>
                    <Row
                        contentHeight="min-content"
                        centerHorizontal
                        centerVertical
                    >
                        <Button onClick={() => {}} title="Создать" />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default EditPattern;
