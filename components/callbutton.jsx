"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <div
      className={`opacity-100 translate-y-0 duration-500 fixed top-[250px] md:top-[65px] lg:top-[250px]  p-1 ml-2 lg:ml-10  z-50`}
    >
      <a
        href="tel:+381646103788"
        className={` bg-gray-700  px-[10px] py-[5px] opacity-90 rounded-lg flex items-center gap-[10px] text-[15px] lg:text-[20px] cursor-pointer`}
      >
        <FaPhoneAlt className="bg-gray-100 rounded-full w-6 h-6 lg:w-12 lg:h-12 p-[4px] text-primary" />{" "}
        <span className={` text-primary flex flex-col text-center`}>
          Pozovite Mini Bus <span>+381646103788</span>{" "}
        </span>
      </a>
    </div>
  );
};

export default CallButton;
