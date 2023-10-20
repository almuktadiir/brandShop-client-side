import stock from '../../../assets/stock.jpg'

const BrandNotAvailable = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className='text-center font-montez text-5xl text-[#b35aae] my-5'>Products are not available</h2>
            <h2 className='text-center font-montez text-2xl text-[#b35aae] my-5'>New Products are Coming soon</h2>
            <img className='w-1/3 h-1/3 mx-auto shadow-lg rounded-full shadow-purple-300' src={stock} alt="" />
        </div>
    );
};

export default BrandNotAvailable;