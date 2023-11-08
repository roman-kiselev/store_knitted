import { Suspense } from "react";
import { Navigate, useLocation } from "react-router";
import { authApi } from "../../api";
import { useAppSelector } from "../../hooks";
import { Spin } from "../../ui";

interface CheckAuthProps {
    children: React.ReactNode;
}

const CheckAuth: React.FC<CheckAuthProps> = ({ children }) => {
    const location = useLocation();
    const { isLoading: isLoadingCheck, data } = authApi.useCheckQuery();
    const { isAuth, isLoading, token } = useAppSelector((store) => store.auth);

    if (isLoading) {
        return <Spin />;
    }
    if (!isAuth) {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }

    return <Suspense fallback={<Spin />}>{children}</Suspense>;
};

export default CheckAuth;
