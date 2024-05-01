import { useEffect } from "react";
import { useNavigate } from "react-router";
import CarouselStore from "../../shared/ui/carousel/CarouselStore";
import ProductsRouter from "./products";

const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/bestsellers", { replace: true });
    }, []);
    return (
        <>
            <CarouselStore />
            {/* <TrendingProduct /> */}
            <ProductsRouter />
        </>
    );
};

export default HomePage;
