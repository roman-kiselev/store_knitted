import { Route, Routes } from "react-router";
import CreateSlide from "./create/CreateSlide";

const SlidesRouter = () => {
    return (
        <Routes>
            <Route path="createSlide/*" element={<CreateSlide />} />
        </Routes>
    );
};

export default SlidesRouter;
