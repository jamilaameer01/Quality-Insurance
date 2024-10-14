import React from "react";

const LOGOS = [
  <img src="wordpress.png" alt="animation" className="w-30" />,
  <img src="gravity.png" alt="animation" className="w-30" />,
  <img src="hp.png" alt="animation" className="w-20" />,
  <img src="LearnDash.png" alt="animation" className="w-30" />,
  <img src="nutella.png" alt="animation" className="w-[150px]" />,
  <img src="robinson.png" alt="animation" className="w-[150px]" />,
  <img src="woo-white.png" alt="animation" className="w-[180px]" />,
  <img src="wp-rocket.png" alt="animation" className="w-30" />,
];

function InfiniteSlider() {
  return (
    <div>
      <div className="relative m-auto container overflow-hidden bg-red-800  py-11">
        <div className="animate-infinite-slider flex w-[calc(250px*200)]">
          {LOGOS.map((logo, index) => (
            <div
              className=" flex w-[400px] items-center justify-between "
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className=" flex w-[400px] items-center justify-between "
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default InfiniteSlider;
