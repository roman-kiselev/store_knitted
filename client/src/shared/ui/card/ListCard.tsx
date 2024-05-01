import { Row } from "antd";
import { useState } from "react";
import { cartApi } from "../../api";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IMasterClass } from "../../interface/models/masterClass";
import { ModalProducts } from "../modal";
import Card from "./Card";

interface IListCardProps {
    arrData?: IMasterClass[];
}

const ListCard: React.FC<IListCardProps> = ({ arrData }) => {
    const dispatch = useAppDispatch();

    const { language } = useAppSelector((store) => store.language);
    const { id, uuid } = useAppSelector((store) => store.temproryUser);
    const { idCart } = useAppSelector((store) => store.cart);
    const [addInCart, { data: dataPatterns }] =
        cartApi.useAddPatternInCartMutation();
    const [open, setOpen] = useState(false);
    const [dataOneItem, setDataOneItem] = useState<IMasterClass | null>(null);

    const showModal = (params: IMasterClass) => {
        setDataOneItem(params);
        setOpen(true);
    };

    const handleOk = () => {
        if (dataOneItem !== null) {
            // dispatch(addMasterClass(dataOneItem));
            addInCart({
                idPattern: +dataOneItem.id,
                idTempUser: id,
                idCart: idCart,
            });
        }

        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <ModalProducts
                dataOneItem={dataOneItem}
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
            <Row style={{ justifyContent: "center" }}>
                <Row
                    gutter={[40, 40]}
                    style={{ maxWidth: "1080px", justifyContent: "center" }}
                >
                    {arrData?.map((item, index) => (
                        <Card
                            handleShowModal={showModal}
                            params={item}
                            key={index}
                            // col="col-3"
                            // colLg="col-lg-12"
                        />
                    ))}
                </Row>
            </Row>
        </>
    );
};

export default ListCard;
