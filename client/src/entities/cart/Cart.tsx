import { Col, Row } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { cartApi, masterClassApi } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { IMasterClass } from "../../shared/interface";
import { ModalProducts } from "../../shared/ui";
import EmailForm from "./EmailForm";
import ListPatterns from "./ListPatterns";

const Cart = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { language } = useAppSelector((store) => store.language);
    const { patterns, totalPriceRu, totalPriceEng, idCart } = useAppSelector(
        (store) => store.cart
    );
    const { data: dataCart } = cartApi.useGetCartByIdQuery({ idCart });
    console.log(dataCart);
    const [buyPatterns, { data: dataPatterns }] =
        masterClassApi.useFormBuyPatternMutation();
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
            <ListPatterns
                language={language}
                patterns={patterns}
                showModal={showModal}
            />
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
                        ? `Итого ${totalPriceRu} ₽`
                        : `Total ${totalPriceEng} $`}
                </h3>
            </Col>
            {patterns.length > 0 ? (
                <EmailForm
                    patterns={patterns}
                    sumTotalEng={totalPriceEng}
                    sumTotalRu={totalPriceRu}
                />
            ) : null}
        </Row>
    );
};

export default Cart;
