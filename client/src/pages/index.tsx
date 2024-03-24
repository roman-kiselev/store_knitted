import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { CheckAuth, CheckTemporaryUser } from "../shared/utils";
import LoginPage from "./admin/auth/LoginPage";
import DownloadStatus from "./downloadPattern/DownloadStatus";
import { HomePage, LayoutPage } from "./home";
import PatternsPage from "./patterns/PatternsPage";

const AdminRouter = lazy(() => import("./admin"));
const CartRouter = lazy(() => import("./cart"));

const Routing = () => {
    return (
        <Routes>
            <Route element={<LayoutPage />}>
                <Route
                    path="/*"
                    element={
                        <CheckTemporaryUser>
                            <HomePage />
                        </CheckTemporaryUser>
                    }
                />
                <Route
                    path="/patterns/*"
                    element={
                        <CheckTemporaryUser>
                            <PatternsPage />
                        </CheckTemporaryUser>
                    }
                />
                {/* <Route path="/toys/*" element={<p>Patterns</p>} /> */}
                <Route path="/contact/*" element={<p>Patterns</p>} />
                <Route
                    path="/cart/*"
                    element={
                        <Suspense fallback={<Spin />}>
                            <CheckTemporaryUser>
                                <CartRouter />
                            </CheckTemporaryUser>
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
                <Route
                    path="/downloadStatus"
                    element={
                        <CheckTemporaryUser>
                            <DownloadStatus />
                        </CheckTemporaryUser>
                    }
                />
            </Route>

            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};

export default Routing;
