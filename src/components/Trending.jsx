import React from 'react'

function Trending() {
    return (
        <div className="banner mb-[10px] w-[100%] p-[10px] bg-white sm:px-[100px] sm:py-[10px]">
            <h1 className='text-center mb-[10px] text-[#000] text-[24px] font-semibold'>Trending</h1>
            <div className="image_gallery grid grid-flow-row grid-cols-3 gap-[5px] sm:gap-[10px] ">
                <div className="image_box col-span-3 sm:col-span-2 bg-red-500 text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">01</div>
                <div className="image_box col-span-3 sm:col-span-1 bg-green-500 text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">02</div>
                <div className="image_box col-span-3 sm:col-span-1 bg-black text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">03</div>
                <div className="image_box col-span-3 sm:col-span-1 bg-yellow-500 text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">04</div>
                <div className="image_box col-span-3 sm:col-span-1 bg-blue-500 text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">05</div>
                <div className="image_box col-span-3 sm:col-span-1 bg-pink-500 text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">06</div>
                <div className="image_box col-span-3 sm:col-span-2 bg-violet-900 text-[#fff] text-[30px] grid place-content-center font-bold rounded-[5px]">06</div>
            </div>
        </div>
    )
}

export default Trending