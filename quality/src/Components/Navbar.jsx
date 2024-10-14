import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Insurance, Company, Resources } from "./CustomSelect";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto font-montserrat text-[#021A56] font-bold ">
        <div className="flex justify-between items-center xs:flex-col xs: ">
          <div>
            <img src="lOGO 1.svg" alt="logo" />
          </div>
          <div>
            <ul className="flex gap-5 text-[13px]  uppercase">
              <li>
                <Insurance />
              </li>
              <li>
                <Company />
              </li>
              <li>
                <Resources />
              </li>
              <li className="flex flex-row-reverse gap-2 items-center">
                <img src="map-pin.svg" alt="map" />
                <p>Location</p>
              </li>
            </ul>
          </div>
          <div>
            <p>Contact us:</p>
            <div className="flex gap-2">
              <img src="phone-call.svg" alt="phone" />
              <p>800-560-4688</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
