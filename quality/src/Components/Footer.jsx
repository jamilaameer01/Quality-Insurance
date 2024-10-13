import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto px-11">
      <div className="flex justify-between gap-11 items-center font-montserrat">
        <div className="flex flex-col items-start gap-y-6">
          <div>
            <img src="lOGO 1.svg" alt="" />
          </div>
          <div>
            <p className="text-left w-[409px] text-[#021A56] text-[16px] font-semibold ">
              Your information is protected by SSL encryption. By submitting
              this contact request you expressly consent OQVEST may contact you
              by telephone, email, or direct mail even if you have previously
              registered on a Do Not Call registry or have previously requested
              that OQVEST not contact you for solicitation purposes.
            </p>
          </div>
          <div className="text-[#FF0000]">
            <p className="text-[18px] font-bold">Stay Connected</p>
            <div className="flex gap-3">
              <FaFacebookF />
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className="flex gap-10 font-semibold">
          <div className="flex flex-col items-start gap-y-4">
            <p className="text-[#021A56]">Contact Us</p>
            <div className="flex gap-3 text-[#FF0000] text-[16px] ">
              <img src="mail.svg" alt="" />
              <p>contact@oqvic.com</p>
            </div>
            <div className="flex gap-3 text-[#FF0000] text-[16px]">
              <img src="phone-call.svg" alt="" />
              <p>201-898-2013</p>
            </div>
          </div>
          <div>
            <ul className="text-left flex flex-col gap-y-4 text-[#021A56]">
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="googlemap.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer