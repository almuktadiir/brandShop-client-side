import BrandCard from "./BrandCard";
import PropTypes from 'prop-types';

const Brands = ({brands}) => {
    
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-center font-montez text-5xl font-semibold italic mb-10">Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    brands.map(brand => <BrandCard 
                    key={brand.brand_id}
                    brand={brand}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brands;

Brands.propTypes = {
    brands: PropTypes.array
}