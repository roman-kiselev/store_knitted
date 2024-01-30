import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, List, Row, Tag } from "antd";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { IMasterClass } from "../../shared/interface";
import { delMasterClass } from "../../shared/models";
import { ModalProducts } from "../../shared/ui";

const Cart = () => {
    const dispatch = useAppDispatch();
    const { language } = useAppSelector((store) => store.language);
    const { patterns, sumTotalRu, sumTotalEng } = useAppSelector(
        (store) => store.cart
    );

    const [open, setOpen] = useState(false);
    const [dataOneItem, setDataOneItem] = useState<IMasterClass | null>(null);

    const showModal = (item: IMasterClass) => {
        setDataOneItem(item);
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleDeletePattern = (id: string) => {
        dispatch(delMasterClass(id));
    };

    return (
        <Row
            justify="center"
            style={{
                margin: "10px auto",
                maxWidth: "1080px",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ModalProducts
                dataOneItem={dataOneItem}
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
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
                                                <p
                                                    onClick={() =>
                                                        showModal(item)
                                                    }
                                                >
                                                    {item.nameRu}
                                                </p>
                                            ) : (
                                                <p
                                                    onClick={() =>
                                                        showModal(item)
                                                    }
                                                >
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
            <Col
                style={{ display: "flex", justifyContent: "center" }}
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
            >
                <h3>
                    {language === "ru"
                        ? `Итого ${sumTotalRu} ₽`
                        : `Total ${sumTotalEng} $`}
                </h3>
            </Col>
            {patterns.length > 0 ? (
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                    }}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                >
                    <Form
                        layout="inline"
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Form.Item
                            name="email"
                            style={{ width: "90%" }}
                            rules={[
                                {
                                    type: "email",
                                    message:
                                        language === "ru"
                                            ? "Неверный E-mail"
                                            : "Invalid E-mail",
                                },
                                {
                                    required: true,
                                    message:
                                        language === "ru"
                                            ? "Пожалуйста, введите вашу почту"
                                            : "Please input your E-mail",
                                },
                            ]}
                        >
                            <Input
                                placeholder={
                                    language === "ru"
                                        ? "Введите электронную почту"
                                        : "Enter your email address"
                                }
                            />
                        </Form.Item>
                    </Form>
                    <Button>{language === "ru" ? "Оформить" : "Buy"}</Button>
                    {/* <Input
                        placeholder={
                            language === "ru"
                                ? "Введите электронную почту"
                                : "Enter your email address"
                        }
                    /> */}
                </Col>
            ) : null}
        </Row>
    );
};

export default Cart;
