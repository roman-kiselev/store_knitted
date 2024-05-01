import { FloatButton } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import cart from "./img/cart.png";

const MyFloatButton = () => {
    const { totalPriceRu, totalPriceEng, patterns } = useAppSelector(
        (store) => store.cart
    );

    return (
        <Link to={"/cart"}>
            <FloatButton
                style={{ width: "50px", height: "50px" }}
                onClick={() => console.log("onClick")}
                badge={{ count: patterns.length }}
                icon={
                    <>
                        <Link to={"/cart"}>
                            <img
                                style={{ width: "20px", height: "20px" }}
                                src={cart}
                                alt="cart"
                            />
                        </Link>
                    </>
                }
            />
        </Link>
    );
};

export default MyFloatButton;
