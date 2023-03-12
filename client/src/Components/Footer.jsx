
import React from "react";

import logo from "../../images/logo.png";
import sign from "../../images/sign.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-gray-900 ">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Contact Details:</p>
      <p className="text-white py-3 text-sm text-center">antonythomas2046@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-1">
      <img src={sign} alt="logo" className="w-52" />
      <p className="text-white text-right text-s">All rights reserved</p>
    </div>
  </div>
);

export default Footer;