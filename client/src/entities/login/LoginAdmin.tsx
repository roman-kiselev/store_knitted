import { useLocation, useNavigate } from "react-router";
import { authApi } from "../../shared/api";
import { useAppSelector, useInputString } from "../../shared/hooks";
import { Button, Input, Spin } from "../../shared/ui";
import Logo from "../../shared/ui/layout/Logo";
import styles from "./styles/login-contanier.module.css";

const LoginAdmin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data: dataCheck, isLoading: isLoadingCheck } =
        authApi.useCheckQuery();
    const { isAuth, isLoading: isLoadingStore } = useAppSelector(
        (store) => store.auth
    );
    const [login, { data, isLoading }] = authApi.useLoginMutation();
    const [email, setEmail] = useInputString("");
    const [password, setPassword] = useInputString("");

    const handleLogin = () => {
        login({ email, password });
    };
    if (isAuth) {
        navigate(location.state?.from || "/admin", { replace: true });
    }
    if (isLoadingCheck || isLoading || isLoadingStore) {
        return <Spin />;
    }
    return (
        <div className={styles.container}>
            <div className={styles.containerLogin}>
                <Logo position="center" />
                <Input
                    style={{ margin: "10px 0px" }}
                    label="Логин"
                    value={email}
                    onChange={setEmail}
                />
                <Input
                    type="password"
                    label="Пароль"
                    value={password}
                    onChange={setPassword}
                />
                <Button
                    onClick={handleLogin}
                    style={{ margin: "10px 0px" }}
                    title="Войти"
                />
            </div>
        </div>
    );
};

export default LoginAdmin;
