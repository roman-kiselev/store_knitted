import { masterClassApi } from "../../api";
import { ContainerB, RowB } from "../layout";
import Card from "./Card";

const ListCard = () => {
    const { data } = masterClassApi.useGetAllMasterClassQuery();

    const testArr = [];
    for (let i = 0; i < 6; i++) {
        if (data) {
            testArr.push(data[1]);
        }
    }

    return (
        <ContainerB>
            <RowB>
                {testArr?.map((item, index) => (
                    <Card
                        params={item}
                        key={index}
                        col="col-3"
                        colLg="col-lg-12"
                    />
                ))}
                {/* <Card col="col-3" colLg="col-lg-12" />
                <Card col="col-3" />
                <Card col="col-3" />
                <Card col="col-3" />
                <Card col="col-3" />
                <Card col="col-3" />
                <Card col="col-3" />
                <Card col="col-3" /> */}
            </RowB>
        </ContainerB>

        // <Container contentWidth="70%" wrap flexBasis="100%">
        //     <Card />
        //     <Card />
        //     <Card />
        //     <Card />
        //     <Card />
        //     <Card />
        //     <Card />
        //     <Card />
        //     {/* <div className={styles.listCardContainer}>

        //     </div> */}
        // </Container>
    );
};

export default ListCard;
