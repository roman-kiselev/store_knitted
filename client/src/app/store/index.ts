import {
    combineReducers,
    configureStore,
    createListenerMiddleware,
} from "@reduxjs/toolkit";
import { adminMainApi, authApi, mainApi } from "../../shared/api";
import {
    authReducer,
    cartReducer,
    currencyReducer,
    formReducer,
    languageReducer,
    masterClassReducer,
    navReducer,
} from "../../shared/models";

const rootReducer = combineReducers({
    language: languageReducer,
    currency: currencyReducer,
    nav: navReducer,
    auth: authReducer,
    form: formReducer,
    masterClass: masterClassReducer,
    cart: cartReducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [adminMainApi.reducerPath]: adminMainApi.reducer,
});

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: authApi.endpoints.login.matchFulfilled,
    effect: (action, listenerApi) => {
        listenerApi.cancelActiveListeners();
        if (action.payload.token) {
            localStorage.setItem("token", action.payload.token);
        }
    },
});

const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(mainApi.middleware, adminMainApi.middleware)
            .prepend(listenerMiddleware.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
