import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import TrendingProduct from "../../../entities/trendingProducts/TrendingProduct";
import { Spin } from "../../../shared/ui";

const FeaturedPage = lazy(
    () => import("../../../entities/trendingProducts/featured/Featured")
);
const LatestPage = lazy(
    () => import("../../../entities/trendingProducts/latest/Latest")
);
const BestsellersPage = lazy(
    () => import("../../../entities/trendingProducts/bestsellers/Bestsellers")
);

const ProductsRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<TrendingProduct />}>
                {/* <Route index path="featured/*"  element={<FeaturedPage />} /> */}
                <Route
                    index
                    path="/featured/*"
                    element={
                        <Suspense fallback={<Spin />}>
                            <FeaturedPage />
                        </Suspense>
                    }
                />
                {/* <Route path="latest/*" element={<LatestPage />} /> */}
                <Route
                    path="/latest/*"
                    element={
                        <Suspense fallback={<Spin />}>
                            <LatestPage />
                        </Suspense>
                    }
                />
                {/* <Route path="bestsellers/*" element={<BestsellersPage />} /> */}
                <Route
                    path="/bestsellers/*"
                    element={
                        <Suspense fallback={<Spin />}>
                            <BestsellersPage />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
};

export default ProductsRouter;
