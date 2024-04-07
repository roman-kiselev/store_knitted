import { Pagination, Row, Spin } from "antd";
import { useState } from "react";
import { masterClassApi } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { setCurrentPage } from "../../shared/models";
import ListCard from "../../shared/ui/card/ListCard";

const PatternList = () => {
    const dispatch = useAppDispatch();
    const { currentPage, totalCount, pageSize, isLoading, masterClass } =
        useAppSelector((store) => store.masterClass);
    const [stateCurrentPage, setStateCurrentPage] =
        useState<number>(currentPage);
    const { data: allData } = masterClassApi.useGetAllMasterClassQuery(
        {
            page: stateCurrentPage.toString(),
            limit: "6",
            offset: pageSize.toString(),
        },
        {
            refetchOnMountOrArgChange: true,
        }
    );

    if (isLoading) {
        return <Spin size="large" />;
    }
    const handleChange = (page: number, pageSize: number) => {
        dispatch(setCurrentPage(page));
        setStateCurrentPage(page);
    };
    return (
        <Row style={{ justifyContent: "center", flexDirection: "column" }}>
            <Row style={{ justifyContent: "center" }}>
                <ListCard arrData={masterClass} />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: "20px" }}>
                <Pagination
                    defaultPageSize={6}
                    defaultCurrent={currentPage}
                    total={totalCount}
                    onChange={handleChange}
                />
            </Row>
        </Row>
    );
};

export default PatternList;
