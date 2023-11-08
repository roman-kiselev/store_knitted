import { lazy } from "react";
import { Route, Routes } from "react-router";
import { CheckAuth } from "../shared/utils";
import LoginPage from "./admin/auth/LoginPage";
import { HomePage, LayoutPage } from "./home";

const AdminRouter = lazy(() => import("./admin"));

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
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
