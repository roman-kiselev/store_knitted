import { Route, Routes } from "react-router";

const ProductsRouter = () => {
    return (
        <Routes>
            <Route path="createProduct/*" element={<p>Create product</p>} />
            <Route path="list/*" element={<p>View list product</p>} />
        </Routes>
    );
};

export default ProductsRouter;
