import { IPayment } from "../payment";
import { IMasterClass } from "./IMasterClass";
import { IMasterClassView } from "./IMasterClassView";

export interface IMasterClassIncludeAll extends IMasterClass {
    masterClassView: IMasterClassView[];
    payment: IPayment[];
}
