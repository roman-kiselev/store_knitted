import { Route, Routes } from "react-router";
import { Cart } from "../../entities";

const CartRouter = () => {
    return (
        <Routes>
            <Route index element={<Cart />} />
        </Routes>
    );
};

export default CartRouter;
