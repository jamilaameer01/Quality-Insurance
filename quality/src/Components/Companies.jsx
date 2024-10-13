import React from "react";

const Companies = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between font-montserrat ">
        <div className=" text-black grow px-5 py-20 ">
          <div className="flex flex-col items-center border-2 border-transparent border-r-black">
            <img src="features 1.svg" alt="features 1" className="w-[48px]" />
            <p className="text-[24px] border-2 border-transparent pb-5 border-b-red-600">
              q ds
            </p>
          </div>
        </div>
        <div className="text-[24px] text-[#021A56] flex justify-between items-center  gap-x-40 px-16 py-20 bg-white">
          <div className="">
            <img
              src="image 2 (1).svg"
              alt="car"
              className="w-[100px] h-[80px]"
            />
          </div>
          <div className="">
            <img
              src="image 3 (17).svg"
              alt="home"
              className="w-[100px] h-[70px]"
            />
          </div>
          <div className="">
            <img
              src="image 1.svg"
              alt="business"
              className="w-[100px] h-[80px]"
            />
          </div>
          <div className="">
            <img
              src="image 5.svg"
              alt="business"
              className="w-[100px] h-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
