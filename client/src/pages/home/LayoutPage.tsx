import { useState } from "react";
import { Header, Layout } from "../../shared/ui";

import { Outlet } from "react-router";

const LayoutPage = () => {
    const [nav, setNav] = useState(false);
    return (
        <Layout>
            <Header />
            <Outlet />
            {/* <CarouselStore />
            <ListCard /> */}
        </Layout>
    );
};

export default LayoutPage;
