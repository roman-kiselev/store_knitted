import { Col, Input, Row } from "antd";
import { useState } from "react";
import { PatternList } from "../../entities";
import { masterClassApi } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { findMasterClass } from "../../shared/models";
import MyFloatButton from "../../shared/ui/layout/MyFloatButton";

const PatternsPage = () => {
    const dispatch = useAppDispatch();
    const { language } = useAppSelector((store) => store.language);
    const { currentPage, totalCount, pageSize, isLoading, masterClass } =
        useAppSelector((store) => store.masterClass);
    const [findState, setFindState] = useState("");

    const handleFind = (value: string) => {
        setFindState(value);
        dispatch(findMasterClass({ language, name: findState }));
    };

    const { data: masterClassData, isLoading: masterClassLoading } =
        masterClassApi.useFindNamePlusGetAllQuery({
            limit: pageSize,
            name: findState,
            offset: pageSize,
            page: currentPage,
        });

    return (
        <Row style={{ justifyContent: "center", flexDirection: "column" }}>
            <Row style={{ justifyContent: "center", margin: "20px 0" }}>
                <Col
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                >
                    {/* <Search
                        placeholder="Введите наименование"
                        onSearch={onSearch}
                        style={{ width: "90%" }}
                    /> */}
                    <Input
                        placeholder="Введите наименование"
                        onChange={(e) => handleFind(e.target.value)}
                        size="large"
                        style={{ width: "90%" }}
                    />
                </Col>
            </Row>
            <PatternList />
            <MyFloatButton />
        </Row>
    );
};

export default PatternsPage;
