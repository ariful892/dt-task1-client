import React from 'react';
import logo from '../../assets/logo.svg';
import home from '../../assets/house-chimney-solid.svg';
import setting from '../../assets/screwdriver-wrench-solid.svg';
import notification from '../../assets/bell-solid.svg';
import option from '../../assets/ellipsis-vertical-solid.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Navbar = () => {

    const menuItems = <>
        <li ><Link to={''}><label className="">
            <div className=" btn btn-ghost btn-circle  rounded-full pt-4">
                <img className="w-6" src={home} alt="" />
            </div>
        </label></Link></li>
        <li><Link to={''}><label className="">
            <div className=" btn btn-ghost btn-circle  rounded-full pt-4">
                <img className="w-6" src={setting} alt="" />
            </div>
        </label></Link></li>
        <li><Link to={''}><label className="">
            <div className=" btn btn-ghost btn-circle rounded-full pt-4">
                <img className="w-6" src={notification} alt="" />
            </div>
        </label></Link></li>

    </>

    return (
        <div className="navbar bg-base-200 sticky px-8 pb-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                        {menuItems}
                    </ul>

                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden  lg:flex ">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
                <div className='flex pl-5 '>
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>

                    <label className="flex flex-col gap-1 btn btn-ghost btn-circle avatar ">
                        <div className="w-1  ">
                            <img src={option} alt="" />
                        </div>
                        <div className="w-1  ">
                            <img src={option} alt="" />
                        </div>
                        <div className="w-1  ">
                            <img src={option} alt="" />
                        </div>
                    </label>

                </div>
            </div>

        </div>
    );
};

export default Navbar;