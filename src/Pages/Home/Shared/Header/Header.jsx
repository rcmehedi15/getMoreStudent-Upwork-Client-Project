
import React from 'react';
import Container from '../FixedSize/Container';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/Logo.png'
const Header = () => {
    const navOptions = (
        <>
            <li>
                <Link to="/">Success Stories</Link>
            </li>
            <li>
                <Link to="/instructors">YouTube</Link>
            </li>
            <li>
                <Link to="/classes">Login</Link>
            </li>
            <li>
                <Link to="/classes" className=" bg-[#05F6EE] text-white hover:bg-[#FD5B16] hover:text-white">Book a Call</Link>
            </li>
        </>
    );

    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <Container>

                <div
                    className='navbar'
                >
                    <div className="navbar ">
                    <Link to="/">
                                <img src={Logo} alt="" className="w-24" />
                            </Link>
                        <div className="dropdown dropdown-end">
                            
                            <label tabIndex={0} className="btn ml-40 btn-ghost  lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                    className='menu menu-compact  dropdown-content bg-slate-100 mt-3 p-2 shadow rounded-box w-52'
                                >
                                    {navOptions}
                                </ul>
                            </div>
                            
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-4 ml-3">{navOptions}</ul>
                        </div>
                    </div>
                           
            </Container>
        </div>
    );
};

export default Header;