import React from "react";

function Header() {
    return (
        <header>
            <div className="header flex item-center justify-between w-[100%] p-[10px] sm:px-[100px] sm:py-[10px]">
                <div className="logo w-[30px] h-[30px]">
                    <img className="w-[100%] h-[100%]" src="https://cdn-icons-png.flaticon.com/128/5977/5977575.png" alt="Logo icon" />
                </div>
                <div className="header_menu flex items-center gap-[10px]">

                    <div className="menu_icon w-[30px] h-[30px] sm:hidden md:hidden lg:hidden">
                        <img className="w-[100%] h-[100%]" src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="" />
                    </div>
                    <ul className="hidden gap-[10px] list_design list-none sm:flex  items-center justify-center">
                        <li><a className="text-[#000] hover:text-blue-600 no-underline text-[14px] font-medium" href="#">Home</a></li>
                        <li><a className="text-[#000] hover:text-blue-600 no-underline text-[14px] font-medium" href="#">About Us</a></li>
                        <li><a className="text-[#000] hover:text-blue-600 no-underline text-[14px] font-medium" href="#">Blogs</a></li>
                    </ul>
                    <button className="hidden sm:block sm:px-[10px] sm:py-[3px]sm: bg-blue-500 sm:text-[#fff] sm:text-[14px]">Contact Us</button>
                </div>
            </div>
        </header>
    )
}
export default Header