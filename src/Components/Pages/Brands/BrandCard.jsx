import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    return (
        <div className="relative grid h-[20rem] w-full max-w-[40rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 cursor-pointer">
            <div className="brand absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none bg-no-repeat" style={{ background: `url(${brand.brand_image})` }}>
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-montez text-5xl font-bold leading-[1.5] tracking-normal text-white antialiased">
                    {brand.brand_name}
                </h2>

            </div>
        </div>
    );
};

export default BrandCard;
BrandCard.propTypes = {
    brand: PropTypes.object
}