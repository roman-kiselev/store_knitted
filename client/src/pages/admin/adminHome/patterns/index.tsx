import { Route, Routes } from "react-router";
import CreatePatterns from "./create/CreatePatterns";

const PatternsRouter = () => {
    return (
        <Routes>
            <Route path="createPatterns/*" element={<CreatePatterns />} />
            <Route path="list/*" element={<p>View list patterns</p>} />
        </Routes>
    );
};

export default PatternsRouter;
