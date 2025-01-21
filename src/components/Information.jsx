import React from 'react'

function Information() {
    return (
        <div className="information mb-[10px] w-[100%] p-[10px] bg-gradient-to-r from-[#181d22] to-[#3f4f5f] rounded-[5px] sm:px-[100px] sm:py-[10px]">
            <div className="info_box p-[10px] w-full rounder-[3px] flex flex-col items-center gap-[20px] sm:flex-row">
                <div className="content_position flex flex-col items-center gap-[10px] sm:w-3/4">
                    <h1 className='px-[100px] text-center text-[#fff] text-[24px] font-semibold'>Do you Need exclusive Corporate Solution ?</h1>
                    <p className='text-center text-[#d9d9d9] text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ipsa neque ex delectus labore fuga modi quasi voluptate molestias culpa adipisci, possimus rerum dicta illo odit vero temporibus earum eveniet?</p>
                    <button className='text-[#fff] text-[14px] bg-pink-500 px-[6px] py-[3px] rounded-[3px]'>know More</button>
                </div>
                <img className='w-[100px] h-[100px]' src="https://cdn-icons-png.flaticon.com/256/8663/8663556.png" alt="" />
            </div>
        </div>
    )
}

export default Information