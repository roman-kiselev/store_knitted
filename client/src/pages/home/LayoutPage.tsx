import { useState } from "react";
import { Outlet } from "react-router";
import { Footer } from "../../shared/ui";
import { ContainerB, Header } from "../../shared/ui/layout";

const LayoutPage = () => {
    const [nav, setNav] = useState(false);
    return (
        // <Layout>
        <ContainerB>
            <Header />
            <Outlet />
            <Footer />
        </ContainerB>
    );
};

export default LayoutPage;
