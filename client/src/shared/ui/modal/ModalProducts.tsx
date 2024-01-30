import { Button, Modal, Row, Tag } from "antd";
import { useAppSelector } from "../../hooks";
import { IMasterClass } from "../../interface/models/masterClass";

interface IModalProductsProps {
    open: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    dataOneItem: IMasterClass | null;
}

const ModalProducts: React.FC<IModalProductsProps> = ({
    dataOneItem,
    handleCancel,
    handleOk,
    open,
}) => {
    const { language } = useAppSelector((store) => store.language);
    console.log(dataOneItem);
    // Получим ссылку(path)
    const path = window.location.pathname;

    return (
        <Modal
            open={open}
            title={
                language === "ru" ? dataOneItem?.nameRu : dataOneItem?.nameEng
            }
            onCancel={handleCancel}
            footer={(_, { OkBtn, CancelBtn }) => (
                <>
                    {path === "/cart" ? null : (
                        <Button onClick={handleOk}>
                            {language === "ru"
                                ? `Купить ${dataOneItem?.priceRu} руб.`
                                : `Buy ${dataOneItem?.priceEng} $`}
                        </Button>
                    )}

                    {/* <CancelBtn /> */}
                    {/* <OkBtn /> */}
                </>
            )}
        >
            <Row>
                <Row
                    style={{
                        justifyContent: "start",
                        width: "100%",
                    }}
                >
                    <img
                        src={`${process.env.REACT_APP_URL_API}/uploads/pattern/${dataOneItem?.files.mainImg}`}
                        alt="img"
                        style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                        }}
                        // width={300}
                        // height={374}
                    />
                </Row>
                <Row>
                    {dataOneItem?.params.map((item) => (
                        <Row
                            style={{
                                justifyContent: "start",
                                width: "100%",
                                marginTop: "3px",
                                maxWidth: "330px",
                            }}
                            key={item.id}
                        >
                            <Tag color="cyan" key={item.id}>
                                {language === "ru"
                                    ? item.valueRu
                                    : item.valueEng}
                            </Tag>
                        </Row>
                    ))}
                </Row>
            </Row>
        </Modal>
    );
};

export default ModalProducts;
