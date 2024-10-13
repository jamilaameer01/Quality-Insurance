import React from 'react'

const Services = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-between font-montserrat ">
        <div className=" text-white bg-[#C50D00] grow text-end px-12 py-5">
          <p className="text-[32px] font-bold ">Find insurance</p>
          <p className="text-[24px]">to Fit Your Needs</p>
        </div>
        <div className="text-[24px] text-[#021A56] flex justify-between  gap-x-40 px-16 py-5 bg-white">
          <div className="flex gap-3 items-start">
            <img src="car 1.svg" alt="car" className="w-[60px] h-[80px]" />
            <div className="flex-col text-left ">
              <p className="font-semibold">CAR</p>
              <span className="font-normal"> Insurance</span>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <img src="home 1.svg" alt="home" className="w-[60px] h-[80px]" />
            <div className="flex-col text-left ">
              <p className="font-semibold ">HOME</p>
              <span className="font-normal">Insurance</span>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <img
              src="Layerbusiness 6 1.svg"
              alt="business"
              className="w-[60px] h-[80px]"
            />
            <div className="flex-col text-left ">
              <p className="font-semibold">BUSINESS</p>
              <span className="font-normal">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services