import { Route, Routes } from "react-router";
import { OnePattern } from "../../../../entities";
import PageListPatterns from "./PageListPatterns";
import CreatePatterns from "./create/CreatePatterns";

const PatternsRouter = () => {
    return (
        <Routes>
            <Route path="createPatterns/*" element={<CreatePatterns />} />
            <Route path="statistics/*" element={<p>Статистика</p>} />
            <Route path="list/*" element={<PageListPatterns />} />
            <Route path="list/:id" element={<OnePattern />} />
        </Routes>
    );
};

export default PatternsRouter;
