import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { CheckAuth } from "../shared/utils";
import LoginPage from "./admin/auth/LoginPage";
import { HomePage, LayoutPage } from "./home";

const AdminRouter = lazy(() => import("./admin"));
const CartRouter = lazy(() => import("./cart"));

const Routing = () => {
    return (
        <Routes>
            <Route element={<LayoutPage />}>
                <Route path="/*" element={<HomePage />} />
                <Route path="/patterns/*" element={<p>Patterns</p>} />
                <Route path="/toys/*" element={<p>Patterns</p>} />
                <Route path="/contact/*" element={<p>Patterns</p>} />
                <Route
                    path="/cart/*"
                    element={
                        <Suspense fallback={<Spin />}>
                            <CartRouter />
                        </Suspense>
                    }
                />

                {/* <Route path="/*" element={<HomePage />} /> */}
                <Route
                    path="/admin/*"
                    element={
                        <CheckAuth>
                            <AdminRouter />
                        </CheckAuth>
                    }
                />
            </Route>

            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};

export default Routing;
