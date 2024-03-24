import { Button, Col, Form, Input } from "antd";
import { useState } from "react";
import { paymentApi } from "../../shared/api/payment";
import { useAppSelector } from "../../shared/hooks";
import { IMasterClass } from "../../shared/interface";

interface IEmailForm {
    patterns: IMasterClass[];
    sumTotalRu: number;
    sumTotalEng: number;
}

const isEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

const EmailForm: React.FC<IEmailForm> = ({
    patterns,
    sumTotalRu,
    sumTotalEng,
}) => {
    //http://localhost:3000/downloadStatus/?id=ae4e2d37-b7e3-4cb5-85a2-ee65e45cebeb
    const { language } = useAppSelector((store) => store.language);
    const [stateEmail, setStateEmail] = useState<string>("");
    const { uuid } = useAppSelector((store) => store.temproryUser);
    const [stateButton, setStateButton] = useState<boolean>(
        isEmail(stateEmail)
    );
    const [createPayment, { data: dataPayment, isSuccess, isLoading }] =
        paymentApi.useCreatePaymentMutation();

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateEmail(e.target.value);
        setStateButton(isEmail(e.target.value));
    };
    const handleClick = () => {
        // const data = {
        //     email: stateEmail,
        //     language,
        //     patterns,
        // };
        // buyPatterns(data);

        const arrPatterns = patterns.map((item) => Number(item.id));
        createPayment({
            amount: sumTotalRu.toString(),
            masterClass: arrPatterns,
            email: stateEmail,
            language: language,
            idUserTemporary: uuid,
        });
    };

    if (isSuccess) {
        window.location.replace(dataPayment.confirmation.confirmation_url);
    }

    return (
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
                        value={stateEmail}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeEmail(e)
                        }
                        placeholder={
                            language === "ru"
                                ? "Введите электронную почту"
                                : "Enter your email address"
                        }
                    />
                </Form.Item>
            </Form>
            <Button disabled={!stateButton} onClick={() => handleClick()}>
                {language === "ru" ? "Оформить" : "Buy"}
            </Button>
            {/* <Input
                        placeholder={
                            language === "ru"
                                ? "Введите электронную почту"
                                : "Enter your email address"
                        }
                    /> */}
        </Col>
    );
};

export default EmailForm;
