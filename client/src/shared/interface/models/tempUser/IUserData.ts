import { ICart } from "../cart";
import { ITempUser } from "./ITempUser";

export interface IUserDataPayload {
    userData: IUserData;
}

export interface IUserData {
    user: ITempUser;
    cart: ICart;
}
