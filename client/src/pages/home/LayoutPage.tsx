import { Col, Row } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import { Footer } from "../../shared/ui";
import { Header } from "../../shared/ui/layout";

const LayoutPage = () => {
    const [nav, setNav] = useState(false);
    return (
        // <Layout>
        <Row>
            <Col span={24}>
                <Header />
                <Outlet />
                <Footer />
            </Col>
        </Row>
    );
};

export default LayoutPage;
