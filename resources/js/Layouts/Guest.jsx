import React from 'react';
import Header from '@/Layouts/Guest/Header'
import Footer from '@/Layouts/Guest/Footer'

export default function Guest({ children }) {
    return (
        <div className="min-h-screen w-full">
            <Header/>
                {children}
            <Footer/>
        </div>
    );
}
