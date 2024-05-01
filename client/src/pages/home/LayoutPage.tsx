import { Col, Row } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import { Footer } from "../../shared/ui";
import { Header } from "../../shared/ui/layout";
import MyFloatButton from "../../shared/ui/layout/MyFloatButton";

const LayoutPage = () => {
    const [nav, setNav] = useState(false);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     navigate("/patterns", { replace: true });
    // }, []);
    return (
        // <Layout>
        <Row>
            <Col span={24}>
                <Header />
                <Outlet />
                <MyFloatButton />
                <Footer />
            </Col>
        </Row>
    );
};

export default LayoutPage;
