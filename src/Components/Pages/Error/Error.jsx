import { Link } from "react-router-dom";
import error from '../../../assets/err.png'

const Error = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-montez italic">Page Not Found</h1>
                    <Link to={`/`}><button className="btn bg-[#e6e6e6] w-full mt-4 font-montez">Go Home</button></Link>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <img src={error} alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Error;