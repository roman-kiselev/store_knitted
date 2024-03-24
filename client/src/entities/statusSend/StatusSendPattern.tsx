import { Button, Result, Spin } from "antd";
import React from "react";
import { paymentApi } from "../../shared/api/payment";
import { useAppSelector } from "../../shared/hooks";

interface IStatusSendPattern {
    email?: string;
    status?: boolean;
}

const StatusSendPattern: React.FC<IStatusSendPattern> = () => {
    const { id, uuid } = useAppSelector((store) => store.temproryUser);
    const { email, isLoading } = useAppSelector((store) => store.payment);
    const { data } = paymentApi.useCheckPaymentQuery({ idUser: uuid });
    console.log(data);
    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Spin size="large" />
            </div>
        );
    }
    const status = data?.status === "succeeded" ? true : false;
    return (
        <>
            {status ? (
                <Result
                    status="success"
                    title="Мастер-класс успешно оплачен!"
                    subTitle={`Почта: ${email}`}
                    extra={[
                        <Button type="primary" key="console">
                            Вернуться на главную
                        </Button>,
                        <Button key="buy">Отправить на почту</Button>,
                        <Button key="buy">Получить чек</Button>,
                    ]}
                />
            ) : (
                <Result
                    status="warning"
                    title="Не удалось отправить мастер-класс"
                    subTitle="Почта: JpVJd@example.com"
                    extra={
                        <Button type="primary" key="console">
                            Повторить отправку
                        </Button>
                    }
                />
            )}
        </>
    );
};

export default StatusSendPattern;
