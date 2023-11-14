import { useInputString } from "../../../shared/hooks";
import { Button, Container, Input, Row } from "../../../shared/ui";
import InputRuEng from "./InputRuEng";

interface IRowInput {
    index: number;
    valueRu: string;
    valueEng: string;
}

const FormCreatePattern = () => {
    const [nameStateRu, setNameStateRu] = useInputString("");
    const [nameStateEng, setNameStateEng] = useInputString("");

    const testArr: IRowInput[] = [
        {
            index: 1,
            valueRu: "valueRu",
            valueEng: "valueEng",
        },
        {
            index: 2,
            valueRu: "valueRu",
            valueEng: "valueEng",
        },
        {
            index: 3,
            valueRu: "valueRu",
            valueEng: "valueEng",
        },
    ];

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log("event");
    };

    return (
        <Container>
            <Row contentHeight="min-content" m={5}>
                <h3>Форма добавления мастер класса</h3>
            </Row>
            <Row contentHeight="min-content" m={5}>
                <Input
                    containerPosition="column"
                    label="Наименование мастер класса RU"
                    style={{ width: "80%" }}
                    resetMaxWidth
                    value={nameStateRu}
                    onChange={setNameStateRu}
                />
            </Row>
            <Row contentHeight="min-content" m={5}>
                <Input
                    containerPosition="column"
                    label="Наименование мастер класса ENG"
                    style={{ width: "80%" }}
                    resetMaxWidth
                    value={nameStateEng}
                    onChange={setNameStateEng}
                />
            </Row>
            <Row contentHeight="min-content" m={5}>
                <Container>
                    {testArr.map((item) => (
                        <InputRuEng
                            index={item.index}
                            handleDragStart={handleDragStart}
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
                <Button title="Добавить" onClick={() => {}} />
            </Row>
        </Container>
    );
};

export default FormCreatePattern;
