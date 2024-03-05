import { ICart } from "../cart";
import { ITempUser } from "./ITempUser";

export interface IUserData {
    user: ITempUser;
    cart: ICart;
}
