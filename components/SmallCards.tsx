import React from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { IoCarSportOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";
import { PiPiggyBankLight } from "react-icons/pi";

const SmallCards = () => {
  return (
    <div className="px-[8px] lg:container lg:px-[50px] mx-auto ">
      <div className=" pb-[20px] lg:pb-[50px] px-[8px] lg:px-[50px] rounded-3xl shadow-lg shadow-primary">
        <h2 className="text-[45px] lg:text-[80px] text-center py-[30px] lg:py-[80px] font-bold">
          Zašto baš mi?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 md:gap-5 ">
          <div className="p-3 text-center flex flex-col gap-3  shadow-lg shadow-primary rounded-xl">
            <TfiMapAlt className="mx-auto text-primary text-5xl md:text-7xl " />

            <p className="text-xl lg:text-2xl">
              Dugogodišnje iskustvo u transportu putnika
            </p>
          </div>
          <div className="p-3 text-center flex flex-col gap-3 shadow-lg shadow-primary rounded-xl">
            <IoCarSportOutline className="mx-auto text-primary text-5xl md:text-7xl " />
            <p className="text-xl lg:text-[24px]">
              Moderna i redovno održavana vozila
            </p>
          </div>

          <div className="p-3 text-center flex flex-col gap-3 shadow-lg shadow-primary rounded-xl">
            <PiPiggyBankLight className="mx-auto text-primary text-5xl md:text-7xl " />
            <p className="text-xl lg:text-[24px]">
              Fleksibilnost u organizaciji prevoza
            </p>
          </div>
          <div className="p-3 text-center flex flex-col gap-3 shadow-lg shadow-primary rounded-xl">
            <FaWifi className="mx-auto text-primary text-5xl md:text-7xl " />

            <p className="text-xl lg:text-2xl">
              Profesionalni i iskusni vozači
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
