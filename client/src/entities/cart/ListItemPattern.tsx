import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, List, Row, Space, Tag } from "antd";
import React from "react";
import { cartApi } from "../../shared/api";
import { IMasterClass, IMasterClassForCart } from "../../shared/interface";

interface IListItemPattern {
    pattern: IMasterClassForCart;
    showModal: (item: IMasterClass) => void;
    language: string;
}

const ListItemPattern: React.FC<IListItemPattern> = ({
    pattern,
    language,
    showModal,
}) => {
    const [delPattern, { data: dataCart }] =
        cartApi.useDeletePatternFromCartMutation();

    const handleDeletePattern = (idCartPattern: number) => {
        delPattern({ idCartPattern });
        // dispatch(delMasterClass(id));
    };

    return (
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
                        onClick={() => showModal(pattern)}
                        shape="square"
                        size={60}
                        src={`${process.env.REACT_APP_URL_API}/uploads/pattern/${pattern.files.mainImg}`}
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
                                <p onClick={() => showModal(pattern)}>
                                    {pattern.nameRu}
                                </p>
                            ) : (
                                <p onClick={() => showModal(pattern)}>
                                    {pattern.nameEng}
                                </p>
                            )}
                        </Col>

                        <Col>
                            <Space>
                                {/* <Input
                                    style={{ width: "70px" }}
                                    type="number"
                                    value={1}
                                    disabled={true}
                                /> */}
                                <Button
                                    onClick={() =>
                                        handleDeletePattern(
                                            pattern.idCartPattern
                                        )
                                    }
                                >
                                    <DeleteOutlined size={25} color="red" />
                                </Button>
                            </Space>
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
                        <Col>
                            <Tag color="#108ee9">
                                {language === "ru" ? (
                                    <p>{pattern.priceRu} ₽</p>
                                ) : (
                                    <p>{pattern.priceEng} $</p>
                                )}
                            </Tag>
                        </Col>
                    </Row>
                }
            />
        </List.Item>
    );
};

export default ListItemPattern;
