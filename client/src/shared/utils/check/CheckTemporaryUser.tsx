import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { tempUserApi } from "../../api";
interface ICheckTemporaryUser {
    children: JSX.Element;
}

const checkAndUpdateUserId = (date: string) => {
    const day = date.split("-")[0];
    const dayLS = localStorage.getItem("dateUserId")?.split("-")[0];
    if (dayLS) {
        if (Number(day) !== Number(dayLS)) {
            localStorage.setItem("userId", uuid());
            localStorage.setItem("dateUserId", date);
        }
    }
};

const currentDate = new Date();
const date =
    currentDate.getDate().toString().padStart(2, "0") +
    "-" +
    (currentDate.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    currentDate.getFullYear();

const CheckTemporaryUser: React.FC<ICheckTemporaryUser> = ({ children }) => {
    const id = localStorage.getItem("userId");
    const { data, isSuccess } = tempUserApi.useCheckTemporaryUserQuery({
        uuid: id as string,
    });

    //userId:"57a8b6d2-1a80-4d05-98e4-b4ceb73170d8"
    useEffect(() => {
        const dateLocalStorage = localStorage.getItem("dateUserId");
        const userIdLocalStorage = localStorage.getItem("userId");

        if (dateLocalStorage === null || userIdLocalStorage === null) {
            localStorage.setItem("userId", uuid());
            localStorage.setItem("dateUserId", date);
        }

        checkAndUpdateUserId(date);

        // const date = localStorage.getItem('dateUpdateUserId')
        // const id = localStorage.getItem('userId')/
    }, []);

    return <>{children}</>;
};

export default CheckTemporaryUser;
