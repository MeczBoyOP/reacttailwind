import React from 'react'

function Category() {
    return (
        <div className="category mb-[10px] w-[100%] p-[10px] bg-white rounded-[5px] sm:px-[100px] sm:py-[20px]">
            <h1 className='text-center text-[#000] text-[16px] font-semibold'>Category</h1>
            <div className="category_position flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between mb-[10px] w-[100%] p-[10px] bg-white rounded-[5px] sm:px-[10px] sm:py-[10px]">
                <div className="category_box w-fit sm:w-[100%] border-[1px] shadow-md p-[10px] flex sm:items-center sm:justify-start gap-[10px] bg-[#fff]">
                    <div className="content flex flex-col gap-[5px]">
                        <h2 className='text-[#000] text-[14px] font-semibold'>Product Name</h2>
                        <p className='text-[#a39b9b] text-[10px]'>Product details</p>
                    </div>
                    <div className="category_icon shadow-lg w-[40px] h-[40px] grid place-items-center rounded-full bg-[#fff9]">
                        <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2875/2875878.png" alt="" />
                    </div>
                </div>
                <div className="category_box w-fit sm:w-[100%] border-[1px] shadow-md p-[10px] flex items-center justify-start gap-[10px] bg-[#fff]">
                    <div className="content flex flex-col gap-[5px]">
                        <h2 className='text-[#000] text-[14px] font-semibold'>Product Name</h2>
                        <p className='text-[#a39b9b] text-[10px]'>Product details</p>
                    </div>
                    <div className="category_icon shadow-lg w-[40px] h-[40px] grid place-items-center rounded-full bg-[#fff9]">
                        <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2875/2875878.png" alt="" />
                    </div>
                </div>
                <div className="category_box w-fit sm:w-[100%] border-[1px] shadow-md p-[10px] flex items-center justify-start gap-[10px] bg-[#fff]">
                    <div className="content flex flex-col gap-[5px]">
                        <h2 className='text-[#000] text-[14px] font-semibold'>Product Name</h2>
                        <p className='text-[#a39b9b] text-[10px]'>Product details</p>
                    </div>
                    <div className="category_icon shadow-lg w-[40px] h-[40px] grid place-items-center rounded-full bg-[#fff9]">
                        <img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/128/2875/2875878.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category