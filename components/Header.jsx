import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <header className="fixed left-0 top-0 w-full z-30">
            <div className="flex justify-between items-center p-4 bg-black text-white">
                <Link href="/" >
                    <h1 className="text-2xl pl-2 font-bold text-[#00df9a]">SCIFIT</h1>
                </Link >

                {/* Desktop menu */}
                <ul className="hidden sm:flex items-center mx-2">
                    <li className="px-4 hover:text-gray-400">
                        <Link href="/">Blog</Link>
                    </li>

                    <li className="px-4 hover:text-gray-400">
                        <Link href="/calculator">Calculator</Link>
                    </li>

                </ul>
                {/* Mobile button */}
                <div className="block sm:hidden z-10" onClick={handleNav}>
                    {/* If nav is true, close-btn, or menu-btn */}
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile menu: anything above small is hidden otherwise ~ */}
                <div className={nav ?
                    "sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                    : "sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
                    <ul>
                        <li onClick={handleNav} className="p-4 text-3xl hover:text-green-400">
                            <Link href="/">Blog</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-3xl hover:text-green-400">
                            <Link href="/calculator">Calculator</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </header >);
};

export default Header;
