import { useState } from "react";
import { Col, Container, InputFile, OneImage } from "../../shared/ui";

const AddOneImg = () => {
    const [selectedImage, setSelectedImage] = useState<
        Blob | MediaSource | null
    >(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    // const [value, setValue] = useState("1");
    // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setValue(event.target.value);
    // };

    return (
        <Container>
            <Col>
                {/* <img
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    src={
                        selectedImage ? URL.createObjectURL(selectedImage) : ""
                    }
                    alt="Пока пусто"
                /> */}
                <OneImage image={selectedImage} />
                <InputFile onChange={handleImageChange} />
                {/* <input
                    // className={styles.fileContanier}
                    type="file"
                    onChange={handleImageChange}
                /> */}
            </Col>
        </Container>
    );
};

export default AddOneImg;
