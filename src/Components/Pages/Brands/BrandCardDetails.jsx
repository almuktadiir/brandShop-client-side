import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "./BrandProducts";
import carousel1 from '../../../assets/zara-ban.jpg';
import carousel2 from '../../../assets/gucci-ban.jpg'
import carousel4 from '../../../assets/addidas-ban.png'
import { Carousel } from "@material-tailwind/react";
import BrandNotAvailable from "./BrandNotAvailable";

const BrandCardDetails = () => {
    const brandDetailsLoader = useLoaderData();
    const { id } = useParams();

    const filterBrand = brandDetailsLoader.filter(singleBrand => singleBrand.brand.toLowerCase() === id.toLowerCase());
    console.log(filterBrand.length);


    return (
        <div>
            <Carousel className="">
            <img
                src={carousel4}
                alt="image 1"
                className="h-[600px] w-full object-cover"
            />
            <img
                src={carousel2}
                alt="image 2"
                className="h-[600px] w-full object-cover"
            />
            <img
                src={carousel1}
                alt="image 4"
                className="h-[600px] w-full object-cover"
            />
        </Carousel>

            {filterBrand.length !== 0 ? 
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-24">
            {
                filterBrand.map(brandProduct => <BrandProducts
                    key={brandProduct._id}
                    product={brandProduct}
                ></BrandProducts>)
            }
        </div>
            :
            <div>
                <BrandNotAvailable></BrandNotAvailable>
            </div>
            }
        </div>
    );
};

export default BrandCardDetails;