// import React from 'react';

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-green-500 py-5">
            <div className="container mx-auto">
                <div className="main flex justify-between items-center text-white">
                    <div className=" text-2xl font-bold">
                        <Link>Rony</Link>
                    </div>
                    <div className="menu text-lg">
                        <ul className="flex gap-3">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/">About</NavLink></li>
                            <li><NavLink to="/">Services</NavLink></li>
                            <li><NavLink to="/">Blog</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;