import { Carousel } from "antd";
import CarouselItem from "./CarouselItem";

const CarouselStore = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel style={{ margin: "4% 0" }} afterChange={onChange}>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            {/* <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div> */}
        </Carousel>
    );
};

export default CarouselStore;
