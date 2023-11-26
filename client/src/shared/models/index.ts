import { authReducer, authSlice } from "./auth";
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
import { navReducer, navSlice, setNav } from "./nav";

export {
    authReducer,
    authSlice,
    currencyReducer,
    currencySlice,
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
    navReducer,
    navSlice,
    pushParams,
    setCurrency,
    setLanguage,
    setNav,
};
