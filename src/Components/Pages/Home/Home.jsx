import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";
import Banner from "../Banner/Banner";
import Map from "../Map/Map";
import TrustedPartner from "../TrustedPartner/TrustedPartner";


const Home = () => {
    const brandData = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Brands brands={brandData}></Brands>
            <TrustedPartner></TrustedPartner>
            <Map></Map>
        
        </div>
    );
};

export default Home;