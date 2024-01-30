import { Col, Row } from "antd";
import { Outlet } from "react-router";
import { H, LinkProduct } from "../../shared/ui";

const TrendingProduct = () => {
    return (
        <>
            <Row style={{ justifyContent: "center" }}>
                <Col>
                    <Row style={{ justifyContent: "center" }}>
                        <Col>
                            <Row justify={"center"}>
                                <H>В продаже</H>
                            </Row>
                            <Row
                                justify={"center"}
                                style={{ marginTop: "10px" }}
                            >
                                <Col>
                                    <LinkProduct
                                        path="featured"
                                        title="Скоро"
                                    />
                                </Col>
                                <Col>
                                    <LinkProduct
                                        path="latest"
                                        title="Последнее"
                                    />
                                </Col>
                                <Col>
                                    <LinkProduct
                                        path="bestsellers"
                                        title="Лучшее"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        {/* ЗДесь featured */}
                        {/* или */}
                        {/* latest */}
                        {/* или  */}
                        {/* bestsellers */}
                        <Outlet />
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default TrendingProduct;
