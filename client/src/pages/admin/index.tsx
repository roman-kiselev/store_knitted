import { lazy } from "react";
import { Route, Routes } from "react-router";
import { AdminHomePage } from "./adminHome";
import SlidesRouter from "./adminHome/slides";

const PatternsRouter = lazy(() => import("./adminHome/patterns"));
const ProductsRouter = lazy(() => import("./adminHome/products"));

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminHomePage />}>
                <Route index element={<p>Admin</p>} />

                <Route path="patterns/*" element={<PatternsRouter />} />
                <Route path="products/*" element={<ProductsRouter />} />
                <Route path="slides/*" element={<SlidesRouter />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;
