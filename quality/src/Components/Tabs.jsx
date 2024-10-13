import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }
  return (
    <div className="text-[18px] font-montserrat text-[#021A56] bg-white">
      <button
        className={`px-4  w-[156px] h-[71px] rounded-none border-none ${
          activeTab === 1 ? "bg-white" : "bg-[#E7E7E7]"
        }`}
        onClick={() => handleTabClick(1)}
      >
        HOME
      </button>
      <button
        className={`px-4 w-[156px] h-[71px] rounded-none border-none ${
          activeTab === 2 ? "bg-white" : "bg-[#E7E7E7]"
        }`}
        onClick={() => handleTabClick(2)}
      >
        AUTO
      </button>
      <button
        className={`px-4 w-[156px] h-[71px] rounded-none border-none ${
          activeTab === 3 ? "bg-white" : "bg-[#E7E7E7]"
        }`}
        onClick={() => handleTabClick(3)}
      >
        BUSINESS
      </button>

      <div className="w-[470px] mx-auto h-[304px] bg-white px-10">
        {activeTab === 1 && (
          <div>
            <p className="text-[40px] text-[#303030] text-center font-semibold pt-5">
              Compare Quotes all in one place.{" "}
            </p>
            <div className="py-5">
              <input
                type="text"
                placeholder="Enter your Zip Code here"
                className="px-3 py-3  bg-white text-[16px] shadow-custom-6  border "
              />
              <button className="px-3 py-3 text-[16px] text-white bg-red-600 border rounded-none">
                View my quotes
              </button>
            </div>
            <p className="text-[#303030] text-[16px] text-center">
              Or call <span className="text-[#0085FF]">1-800-2952723</span> for
              a quote
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <p className='text-blue-600'>Compare Quotes all in one place. </p>
            <div>
              <input type="text" placeholder="Enter your Zip Code here" />
              <button>View my quotes</button>
            </div>
            <p>
              Or call <span>1-800-2952723</span> for a quote
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <p className='text-green-500'>Compare Quotes all in one place. </p>
            <div>
              <input type="text" placeholder="Enter your Zip Code here" />
              <button>View my quotes</button>
            </div>
            <p>
              Or call <span>1-800-2952723</span> for a quote
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs