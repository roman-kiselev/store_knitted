import { useParams } from "react-router";
import { masterClassApi } from "../../shared/api";
import { Container, Spin } from "../../shared/ui";
import EditPattern from "./edit/EditPattern";

const OnePattern = () => {
    const { id } = useParams();
    const { data, isLoading } = masterClassApi.useGetOneMasterClassQuery({
        id: id as string,
    });
    if (isLoading) {
        <Spin />;
    }

    return <Container>{data && <EditPattern dataPattern={data} />}</Container>;
};

export default OnePattern;
