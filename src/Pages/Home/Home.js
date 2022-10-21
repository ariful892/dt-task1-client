import React from 'react';
import SideNav from '../Shared/SideNav';
import Assets from './Assets';

const Home = () => {

    return (
        <div className='flex'>
            <SideNav></SideNav>
            <Assets></Assets>
        </div>
    );
};

export default Home;