import React from "react";
import "../App.css";


function Footer() {
    return (
        <div className="relative flex flex-col items-center min-h-auto md:mt-10">
            <div className="footer-left-flower" />
            
            <div className="mt-5 text-center">
                <div className="text-sm md:text-xl tracking-widest font-semibold georgia">
                    Kami yang berbahagia,
                </div>
            </div>
            <div className="footer-rounded ">
                <img src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150850/invaite/assets_3.png" alt="" className="crop-footer-rounded" />
            </div>
            <div className="md:mt-5 mt-2 text-center md:mb-3 mb-1">
                <div className="text-xs md:text-xl tracking-widest font-bold georgia">
                    Design by
                </div>
            </div>
            <div className="insta-rounded mb-2">
                <img
                    src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150839/invaite/insta.png"
                    alt="Instagram"
                    className="crop-insta-rounded border rounded-full border-gray-600 px-5 py-0"
                />
            </div>
            <div className="footer-right-flower" />
            <div className="mt-3" />
        </div>
    );
}

export default Footer;
