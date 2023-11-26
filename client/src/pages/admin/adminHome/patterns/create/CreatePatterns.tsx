import { useState } from "react";
import { CreatePattern } from "../../../../../features";
import { useInputString } from "../../../../../shared/hooks";
import { Col, Input, Row } from "../../../../../shared/ui";

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

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const [value, setValue] = useInputString("");

    return <CreatePattern />;
};

export default CreatePatterns;
