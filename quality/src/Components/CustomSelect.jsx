import React, { useState } from "react";

export const Insurance = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative  uppercase font-montserrat text-[#021A56] font-semibold text-[16px]">
      <select
        className="block  px-4 py-2 pr-8  rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Insurance and more</option>
        <option value="option1">health</option>
        <option value="option2">property</option>
        <option value="option3">car</option>
      </select>
    </div>
  );
};

export const Company = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative  uppercase text-[16px] font-montserrat text-[#021A56] font-semibold">
      <select
        className="block  px-4 py-2 pr-8 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Our company</option>
        <option value="option1">ABC</option>
        <option value="option2">GYN</option>
        <option value="option3">YXZ</option>
      </select>
    </div>
  );
};
export const Resources = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative uppercase font-montserrat text-[#021A56] font-semibold text-[16px]">
      <select
        className="block  px-4 py-2 pr-8  rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Resources</option>
        <option value="option1">CAR</option>
        <option value="option2">HOUSE</option>
        <option value="option3">BIKE</option>
      </select>
    </div>
  );
};
const CustomSelect = () => {
  return (
    <div className="">
      <Insurance />
      <Company />
      <Resources />
    </div>
  );
};
export default CustomSelect;
