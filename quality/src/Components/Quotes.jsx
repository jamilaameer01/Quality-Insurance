import React from 'react'

const Quotes = () => {
  return (
    <div className="container mx-auto font-montserrat ">
      <div className=''>
        <h2 className="text-[40px] text-[#021A56] text-center font-bold">
          Get personalized quotes in 5 minutes or less.
        </h2>
        <div className="flex items-start gap-x-20 pt-20 justify-center">
          <div>
            <img src="girl.svg" alt="girl" className=''/>
          </div>
          <div className="flex flex-col items-start text-left gap-y-6 w-[586px]">
            <h2 className="text-[32px] text-[#021A56] font-semibold">
              Compare personalized quotes
            </h2>
            <p className="text-[24px] text-black font-semibold">
              Answer a couple of questions, we'll provide accurate real-time
              quotes. Users save up to $996 on annual premiums when they compare
              with OQVIC.
            </p>
            <button className="px-3 py-3 text-[21px] bg-red-700 text-center">
              Get my Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes