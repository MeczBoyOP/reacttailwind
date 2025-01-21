import React from "react";

function Banner() {
    return (
        <div className="banner mb-[10px] w-[100%] p-[10px] bg-white rounded-[5px] sm:px-[100px] sm:py-[20px] ">
            <div className="banner_box border-[1px] shadow-md p-[10px] flex flex-col gap-[20px] sm:flex-row sm:items-center sm:justify-between">
                <div className="banner_left flex flex-col gap-[10px] sm:w-1/2">
                    <h1 className="text-[#000] text-[30px] font-bold">Banner Heading</h1>
                    <p className="text-[#9c7272] text-[16px] font-regular">Lorem, ipsum dolor sit consectetur.Lorem, ipsum dolor sit consectetur.</p>
                    <button className="w-[100px] py-[3px] rounded-[3px] text-[12px] bg-blue-500 text-[#fff]  hover:bg-blue-700 ">Know More</button>
                </div>
                <div className="hidden banner_right sm:flex sm:items-center justify-end sm:w-1/2 ">
                    <img className="w-[200px] h-[100%]" src="https://cdn-icons-png.flaticon.com/256/12564/12564141.png" alt="banner_sticker" />
                </div>
            </div>
        </div>
    )
} export default Banner