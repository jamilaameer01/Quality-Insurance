import React from 'react'
import Tabs from './Tabs';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto bg-pattern bg-no-repeat ">
        <div className='flex justify-end items-start gap-x-10  pr-20 py-[150px]'>
          <div className="text-[#021A56] font-montserrat ">
            <p className="text-[47px] font-bold">
              Save up to <span className='text-red-700'>25%</span>
            </p>
            <p className="text-[40px]">on your Insurance!*</p>
          </div>
                  <div>
                      <Tabs/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero