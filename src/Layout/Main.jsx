import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Shared/Footer/Footer';


const Main = () => {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;