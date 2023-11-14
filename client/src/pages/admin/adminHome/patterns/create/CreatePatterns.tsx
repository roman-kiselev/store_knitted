import { useState } from "react";
import { AddOneImg, FormCreatePattern } from "../../../../../entities";
import { useInputString } from "../../../../../shared/hooks";
import { Col, Container, Input, Row } from "../../../../../shared/ui";

interface IRowInput {
    index: number;
    valueRu: string;
    valueEng: string;
}

const RowInput: React.FC<IRowInput> = ({ index, valueEng, valueRu }) => {
    const [valueRuState, setValueRuState] = useInputString("");
    const [valueEngState, setValueEngState] = useInputString("");

    return (
        <Row
            contentHeight="min-content"
            centerVertical
            centerHorizontal
            mt={10}
            mb={10}
        >
            <Col mr={5}>
                <Col>
                    <Col mr={10} contentWidth="min-content">
                        {index}.
                    </Col>
                    <Col>
                        <Row centerHorizontal centerVertical>
                            <Input
                                style={{ margin: "5px 0" }}
                                label="RU"
                                containerPosition="row"
                                resetMaxWidth
                                value={valueRuState}
                                onChange={setValueRuState}
                            />

                            <Input
                                style={{ margin: "5px 0" }}
                                label="ENG"
                                containerPosition="row"
                                resetMaxWidth
                                value={valueEngState}
                                onChange={setValueEngState}
                            />
                        </Row>
                    </Col>
                </Col>
            </Col>
        </Row>
    );
};

const CreatePatterns = () => {
    const [selectedImage, setSelectedImage] = useState<
        Blob | MediaSource | null
    >(null);

    const [inputState, setINputState] = useState<IRowInput[]>([
        {
            index: 1,
            valueRu: "",
            valueEng: "",
        },
        {
            index: 2,
            valueRu: "",
            valueEng: "",
        },
        {
            index: 3,
            valueRu: "",
            valueEng: "",
        },
    ]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const [value, setValue] = useInputString("");

    return (
        <Container>
            <Row>
                <Col m={5} contentWidth="30%">
                    <AddOneImg />
                </Col>
                <Col m={5} contentWidth="60%">
                    <FormCreatePattern />
                    {/* <Row contentHeight="max-content">
                        <h3>Форма добавления мастер класса</h3>
                    </Row>
                    <Row contentHeight="max-content">
                        <Input
                            styleLabel={{ width: "100%" }}
                            label="Наименование мастер класса"
                            containerPosition="column"
                            style={{ width: "80%" }}
                            resetMaxWidth
                            value={value}
                            onChange={setValue}
                        />
                    </Row>
                    <Row
                        mt={10}
                        mb={10}
                        contentHeight="max-content"
                        centerHorizontal
                        centerVertical
                    >
                        <BsFillPlusCircleFill
                            size={30}
                            cursor={"pointer"}
                            color="green"
                        />
                    </Row>
                    {inputState.map((item, index) => {
                        return (
                            <RowInput
                                key={index}
                                index={item.index}
                                valueRu={item.valueRu}
                                valueEng={item.valueEng}
                            />
                        );
                    })} */}
                </Col>
            </Row>
        </Container>
    );
};

export default CreatePatterns;
