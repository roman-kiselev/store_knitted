import { useParams } from "react-router";
import { masterClassApi } from "../../shared/api";

const OnePattern = () => {
    const { id } = useParams();
    const { data } = masterClassApi.useGetOneMasterClassQuery({
        id: id as string,
    });
    console.log(data);

    return <div>OnePattern</div>;
};

export default OnePattern;
