import { Col, Container, InputFile, OneImage } from "../../shared/ui";

interface IAddOneImg {
    initialValue: Blob | MediaSource | null;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    viewImage?: boolean;
}

const AddOneImg: React.FC<IAddOneImg> = ({
    initialValue,
    onChange,
    viewImage = true,
}) => {
    return (
        <Container>
            <Col>
                {viewImage && <OneImage image={initialValue} />}
                <InputFile onChange={onChange} />
            </Col>
        </Container>
    );
};

export default AddOneImg;
