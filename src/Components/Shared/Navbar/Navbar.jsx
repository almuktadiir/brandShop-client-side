import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo1.png'
import GoogleLogin from "../../Pages/Login/googleLogin";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ToggleBtn from "./ToggleBtn";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme')? localStorage.getItem('theme'): 'light'
    )

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        e.target.checked ? setTheme('dark') : setTheme('light');
    }

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
        <li><ToggleBtn handleToggle={handleToggle}></ToggleBtn></li>
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

                            < div className="items-center justify-end md:flex-row flex flex-col">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <div>
                                    <p className="text-black mx-1 border-0">{user.displayName}</p>
                                </div>
                                <div>
                                    <Link onClick={handleLogOut} className="btn btn-neutral text-xs text-white px-4 border-0">Logout</Link>
                                </div>
                            </div>
                            :
                            <div className="dropdown">
                                <label tabIndex={0} className="btn m-1 font-playFair italic">Register Here</label>
                                <div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-gray-300 rounded-box w-72 -ml-[8rem]">
                                        <li><NavLink className={`font-playFair text-lg italic font-bold text-center text-white w-full`} to={`/login`}>Sign In</NavLink></li>

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