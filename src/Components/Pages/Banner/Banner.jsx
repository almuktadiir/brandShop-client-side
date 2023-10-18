import ban1 from '../../../assets/banner-1.jpg'
import ban2 from '../../../assets/banner-2.jpg'
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
    return (
        <Carousel className="">
            <img
                src={ban1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={ban2}
                alt="image 2"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
};

export default Banner;