import { Col, Row, Space, Spin, Table, TableProps, Tag } from "antd";
import { Link } from "react-router-dom";
import { masterClassApi } from "../../../../shared/api";
import { IMasterClass } from "../../../../shared/interface";

interface IMasterClassWithKey extends IMasterClass {
    index: number;
    key: string;
}

const columns: TableProps<IMasterClassWithKey>["columns"] = [
    {
        title: "№",
        dataIndex: "index",
        key: "index",
    },
    {
        title: "Наименование",
        dataIndex: "name",
        key: "name",
        render: (_, { nameRu, nameEng }) => (
            <>
                <Tag color="geekblue">{nameRu}</Tag>
                <Tag color="geekblue">{nameEng}</Tag>
            </>
        ),
    },
    {
        title: "Цена",
        dataIndex: "price",
        key: "price",
        render: (_, { priceRu, priceEng }) => (
            <>
                <Tag color="cyan">{priceRu} руб.</Tag>
                <Tag color="cyan">{priceEng} $</Tag>
            </>
        ),
    },

    {
        title: "Действия",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <Link to={`/admin/patterns/list/${record.id}`}>
                    Редактировать
                </Link>
                <Link to={`/admin/patterns/statistics/${record.id}`}>
                    Статистика
                </Link>
            </Space>
        ),
    },
];

const PageListPatterns = () => {
    const { data, isLoading } = masterClassApi.useGetAllMasterClassQuery({
        page: "1",
        limit: "10",
        offset: "0",
    });
    if (isLoading) {
        return <Spin />;
    }
    const dataForColumn: IMasterClassWithKey[] = [];

    if (data) {
        const { rows } = data;
        rows.forEach((row, index) => {
            dataForColumn.push({
                ...row,
                index: index + 1,
                key: row.id,
            });
        });
    }

    return (
        <Row style={{ width: "100%" }}>
            <Col sm={24} md={24} lg={24} xl={24}>
                <Table columns={columns} dataSource={dataForColumn} />
            </Col>
        </Row>
    );
};

export default PageListPatterns;
