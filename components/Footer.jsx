import React, { useState, useEffect } from "react";

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolledToBottom =
                window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

            setShowFooter(isScrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer
            className={`${showFooter ? "block" : "hidden"
                } bg-black text-white py-3 mt-3 text-center left-0 bottom-0`}
        >
            <div className="container mx-auto">©2023. BSH. All rights reserved.</div>
            <div className="text-base">Contact: aetherforall@gmail.com</div>
        </footer>
    );
};

export default Footer;
