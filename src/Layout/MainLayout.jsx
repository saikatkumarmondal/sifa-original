import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Navbar2 from '../components/Navbar2';

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar> 
                {/* <Navbar2></Navbar2> */}
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            
        </>
    );
};

export default MainLayout;