import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';

const userLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default userLayout;