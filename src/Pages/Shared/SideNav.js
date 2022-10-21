import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAssets from '../../hooks/useAssets';

const SideNav = () => {

    const [assets, setAssets] = useAssets([]);
    const [navItem, setNavItem] = useState(false);

    const handleNav = () => {
        setNavItem(true);
    }

    return (
        <div className='mt-16 border-2 rounded-r-lg h-1/2'>
            <div className='sm:w-24 lg:w-48 bg-black text-end flex justify-end rounded-tr-lg'>
                <label onClick={handleNav} tabIndex="0" htmlFor="my-sidenav" className="text-white py-3 pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            {/* <label className="btn btn-primary drawer-button">Open drawer</label> */}
            <div className="drawer">
                <input id="my-sidenav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                </div>
                <div className={`drawer-side h-full ${navItem ? "w-48" : "w-24"}`}>
                    <label htmlFor="my-sidenav" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content ">
                        <label htmlFor="" className='text-md font-bold '>1. demo task</label>
                        <hr className='mt-4' />
                        {/* <!-- Sidebar content here --> */}
                        {
                            assets.map(asset =>
                                <ul className="list-disc" key={asset.asset_id}>
                                    <li><Link>{asset.asset_title}</Link></li>
                                    <hr className='mt-1' />
                                </ul>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNav;