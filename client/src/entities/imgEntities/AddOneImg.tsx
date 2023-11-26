import { Col, Container, InputFile, OneImage } from "../../shared/ui";

interface IAddOneImg {
    initialValue: Blob | MediaSource | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddOneImg: React.FC<IAddOneImg> = ({ initialValue, onChange }) => {
    return (
        <Container>
            <Col>
                <OneImage image={initialValue} />
                <InputFile onChange={onChange} />
            </Col>
        </Container>
    );
};

export default AddOneImg;
