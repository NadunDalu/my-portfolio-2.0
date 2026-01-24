import React, { useEffect } from 'react';
import Link from 'next/link';
import { headerData } from './HeaderData';

const Header = () => {
    useEffect(() => {
        // Always enable dark mode
        document.body.classList.add('theme-dark');
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <div>
            {/* Header */}
            <div id="header">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3 order-lg-2 text-end">
                        <div className="d-inline-flex align-items-center">
                            {/* Social Links - Removed */}
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 order-lg-1 col-xl-9">
                        <div className="py-4">
                            <h1 className="display-2 fw-semi-bold m-0">
                                {headerData.mainData.firstName} <span className="stroke-text">{headerData.mainData.secondName}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header */}
        </div>
    );
};

export default Header;
