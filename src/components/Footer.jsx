import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer flex flex-col item-center justify-center lg:flex-row lg:justify-between w-[100%] bg-[#343a40] px-[10px] py-[10px] sm:px-[100px] sm:py-[10px] sm:justify-between">
                <div className="copyright_content mb-[10px]">
                    <h1 className="text-center text-[#ffffff] text-[14px] font-medium">All copyrights reserved &copy; 2022 - Designed & Developed by UIdeck</h1>
                </div>
                <div className="footer_menu flex flex-col items-center lg:flex-row lg:gap-[10px]">
                    <ul className="flex items-center gap-[10px] list-none mb-[10px]">
                        <li><a className="text-[#fff] hover:text-blue-600 no-underline text-[14px] font-medium" href="#">Home</a></li>
                        <div className="round_divider w-[3px] h-[3px] rounded-full bg-[#d9d9d9]" />
                        <li><a className="text-[#fff] hover:text-blue-600 no-underline text-[14px] font-medium" href="#">About Us</a></li>
                        <div className="round_divider w-[3px] h-[3px] rounded-full bg-[#d9d9d9]" />
                        <li><a className="text-[#fff] hover:text-blue-600 no-underline text-[14px] font-medium" href="#">Blogs</a></li>
                    </ul>
                    <button className="text-[14px] text-[#fff] border-[1px] border-[#fff] px-[6px] py-[3px] rounded-[3px]">Contact Us</button>
                </div>
            </div>
        </footer>
    )
}
export default Footer