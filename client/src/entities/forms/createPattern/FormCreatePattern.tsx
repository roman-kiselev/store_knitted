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
            <Row>
                <h3>Форма добавления мастер класса</h3>
            </Row>
            <Row>
                <Input
                    containerPosition="column"
                    label="Наименование мастер класса RU"
                    style={{ width: "80%" }}
                    resetMaxWidth
                    value={nameStateRu}
                    onChange={setNameStateRu}
                />
            </Row>
            <Row>
                <Input
                    containerPosition="column"
                    label="Наименование мастер класса ENG"
                    style={{ width: "80%" }}
                    resetMaxWidth
                    value={nameStateEng}
                    onChange={setNameStateEng}
                />
            </Row>
            <Row>
                {testArr.map((item) => (
                    <InputRuEng
                        index={item.index}
                        handleDragStart={handleDragStart}
                    />
                ))}
            </Row>
            <Row>
                <Button title="Добавить" onClick={() => {}} />
            </Row>
        </Container>
    );
};

export default FormCreatePattern;
