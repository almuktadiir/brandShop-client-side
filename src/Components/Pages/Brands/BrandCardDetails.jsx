import { useLoaderData, useParams } from "react-router-dom";

const BrandCardDetails = () => {
    const brandDetailsLoader = useLoaderData();
    const {id} = useParams();
    
    const filter = brandDetailsLoader.filter(singleBrand => singleBrand.brand.toLowerCase() === id.toLowerCase());
    console.log(filter);


    return (
        <div>
            <h2>details</h2>
        </div>
    );
};

export default BrandCardDetails;