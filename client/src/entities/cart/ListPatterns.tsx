import { Col, List, Spin } from "antd";
import { useAppSelector } from "../../shared/hooks";
import { IMasterClass, IMasterClassForCart } from "../../shared/interface";
import ListItemPattern from "./ListItemPattern";

interface IListPatterns {
    patterns: IMasterClassForCart[];
    language: string;
    showModal: (item: IMasterClass) => void;
}

const ListPatterns: React.FC<IListPatterns> = ({
    patterns,
    language,
    showModal,
}) => {
    const { isLoading } = useAppSelector((store) => store.cart);
    if (isLoading) {
        return <Spin />;
    }

    return (
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <List
                style={{ margin: 10 }}
                itemLayout="horizontal"
                dataSource={patterns}
                renderItem={(item, index) => (
                    <>
                        <ListItemPattern
                            language={language}
                            pattern={item}
                            showModal={showModal}
                        />
                    </>
                )}
            />
        </Col>
    );
};

export default ListPatterns;
