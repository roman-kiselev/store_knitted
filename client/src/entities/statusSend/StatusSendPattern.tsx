import { Button, Result } from "antd";
import React from "react";

interface IStatusSendPattern {
    email?: string;
    status?: boolean;
}

const StatusSendPattern: React.FC<IStatusSendPattern> = ({ email, status }) => {
    status = false;
    return (
        <>
            {status ? (
                <Result
                    status="success"
                    title="Мастер-класс успешно отправлен!"
                    subTitle="Почта: JpVJd@example.com"
                    extra={[
                        <Button type="primary" key="console">
                            Вернуться на главную
                        </Button>,
                        <Button key="buy">Повторить отправку</Button>,
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
