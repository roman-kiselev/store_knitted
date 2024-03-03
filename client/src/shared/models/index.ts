import { authReducer, authSlice } from "./auth";
import { addMasterClass, cartReducer, delMasterClass } from "./cart";
import { currencyReducer, currencySlice, setCurrency } from "./currency";
import {
    delRowParams,
    editNameEng,
    editNameRu,
    editParams,
    editPriceEng,
    editPriceRu,
    formReducer,
    formSlice,
    pushParams,
} from "./forms";
import { languageReducer, languageSlice, setLanguage } from "./language";
import { masterClassReducer, masterClassSlice } from "./master-class";
import { navReducer, navSlice, setNav } from "./nav";

export { paymentReducer, paymentSlice } from "./payment";

export {
    addMasterClass,
    authReducer,
    authSlice,
    cartReducer,
    currencyReducer,
    currencySlice,
    delMasterClass,
    delRowParams,
    editNameEng,
    editNameRu,
    editParams,
    editPriceEng,
    editPriceRu,
    formReducer,
    formSlice,
    languageReducer,
    languageSlice,
    masterClassReducer,
    masterClassSlice,
    navReducer,
    navSlice,
    pushParams,
    setCurrency,
    setLanguage,
    setNav,
};
