import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo1.png'
import GoogleLogin from "../../Pages/Login/googleLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => console.log(res.user))
            .catch(err => {
                console.log(err.message);
            })
    }


    const navLinks = <>
        <li><NavLink className={`font-playFair text-lg italic`} to={`/`}>Home</NavLink></li>
        <li><NavLink className={`font-playFair text-lg italic`} to={`/addproduct`}>Add Product</NavLink></li>
        <li><NavLink className={`font-playFair text-lg italic`} to={`/cart`}>My Cart</NavLink></li>
    </>

    return (
        <div className="bg-[#909195] text-white">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-14 h-14 rounded-full" src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-2xl font-montez">EleganceEdge</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    {
                        user?.email ?

                            < div className="flex items-center justify-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <div>
                                    <p className="text-black mx-1 border-0">{user.displayName}</p>
                                </div>
                                <div>
                                    <Link onClick={handleLogOut} className="btn btn-sm bg-[#ee62a8] text-xs text-white px-2 border-0">Logout</Link>
                                </div>
                            </div>
                            :
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn m-1 font-playFair italic">Register Here</label>
                                <div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#909195] rounded-box w-72 -ml-[8rem]">
                                        <li><NavLink className={`font-playFair text-lg italic`} to={`/login`}>Sign In</NavLink></li>

                                        <li><GoogleLogin></GoogleLogin></li>
                                    </ul>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;