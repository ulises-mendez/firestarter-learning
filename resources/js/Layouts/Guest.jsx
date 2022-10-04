import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Header from '@/Layouts/Guest/Header'
export default function Guest({ children }) {
    return (
        <div className="min-h-screen w-full">
            <Header />
                {children}
        </div>
    );
}
