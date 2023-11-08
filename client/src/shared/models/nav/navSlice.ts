import { createSlice } from "@reduxjs/toolkit";

interface INavSlice {
    nav: boolean;
}

const initialState: INavSlice = {
    nav: false,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setNav: (state, action) => {
            state.nav = action.payload;
        },
    },
});

export const { setNav } = navSlice.actions;
export const navReducer = navSlice.reducer;
