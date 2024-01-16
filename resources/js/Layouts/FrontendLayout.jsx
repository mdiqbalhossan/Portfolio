import React, { useEffect } from 'react';

import Header from '../Components/Frontend/Header';
import Footer from '../Components/Frontend/Footer';
import CustomCursor from '../Components/Frontend/CustomCursor';

export default function FrontendLayout({ children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <CustomCursor />
            <Footer />
        </>
    );
}
