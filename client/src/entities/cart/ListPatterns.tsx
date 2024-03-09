import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, List, Row, Tag } from "antd";
import { useAppDispatch } from "../../shared/hooks";
import { IMasterClass } from "../../shared/interface";

interface IListPatterns {
    patterns: IMasterClass[];
    language: string;
    showModal: (item: IMasterClass) => void;
}

const ListPatterns: React.FC<IListPatterns> = ({
    patterns,
    language,
    showModal,
}) => {
    const dispatch = useAppDispatch();

    const handleDeletePattern = (id: string) => {
        // dispatch(delMasterClass(id));
    };

    return (
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <List
                style={{ margin: 10 }}
                itemLayout="horizontal"
                dataSource={patterns}
                renderItem={(item, index) => (
                    <List.Item
                        style={{
                            margin: "0 auto",
                            justifyContent: "center",
                        }}
                    >
                        <List.Item.Meta
                            style={{ width: "600px", maxWidth: "600px" }}
                            avatar={
                                <Avatar
                                    shape="square"
                                    size={60}
                                    src={`${process.env.REACT_APP_URL_API}/uploads/pattern/${item.files.mainImg}`}
                                />
                            }
                            title={
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Col>
                                        {language === "ru" ? (
                                            <p onClick={() => showModal(item)}>
                                                {item.nameRu}
                                            </p>
                                        ) : (
                                            <p onClick={() => showModal(item)}>
                                                {item.nameEng}
                                            </p>
                                        )}
                                    </Col>
                                    <Col>
                                        <Button
                                            onClick={() =>
                                                handleDeletePattern(item.id)
                                            }
                                        >
                                            <DeleteOutlined
                                                size={25}
                                                color="red"
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                            }
                            description={
                                <Row
                                    style={{
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* <Col>
                                            <p>
                                                "Ant Design, a design language
                                                for background applications, is
                                                refined by Ant UED Team"
                                            </p>
                                        </Col> */}
                                    <Col>
                                        <Tag color="#108ee9">
                                            {language === "ru" ? (
                                                <p>{item.priceRu} ₽</p>
                                            ) : (
                                                <p>{item.priceEng} $</p>
                                            )}
                                        </Tag>
                                    </Col>
                                </Row>
                            }
                        />
                    </List.Item>
                )}
            />
        </Col>
    );
};

export default ListPatterns;
