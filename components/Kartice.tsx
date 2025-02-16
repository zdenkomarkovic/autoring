import React from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { FaPaw } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { PiPiggyBankLight } from "react-icons/pi";

const Kartice = () => {
  return (
    <div className="px-[8px] lg:container lg:px-[50px] mx-auto text-gray-900 ">
      <div className=" pb-[20px] lg:pb-[50px] px-[8px] lg:px-[50px] border-2 border-cool-green rounded-3xl my-[50px] lg:my-[100px] bg-gray-100">
        <h2 className="text-[45px] lg:text-[80px] text-center py-[30px] lg:py-[80px] font-bold">
          <span className="text-primary">Mega Taxi Pozega</span>
        </h2>
        <div className="flex flex-col lg:flex-row flex-wrap gap-[25px] lg:gap-[30px] mx-auto px-auto justify-center">
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <TfiMapAlt className="mx-auto text-primary text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-primary">
              Voznje u gradu i van grada
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Sa nama do okolnih sela, gradova i u inostaranstvo
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <CiCreditCard2 className="mx-auto text-primary text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-primary">
              Platna kartica
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Imamo mogucnost placanja karticom
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <IoCarSportOutline className="mx-auto text-primary text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-primary">
              Nasa vozila
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              U nasoj floti imamo nova i moderna vozila
            </p>
          </div>

          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <PiPiggyBankLight className="mx-auto text-primary text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-primary">
              Placanje na racun
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Voznje se mogu platiti i preko racuna
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <FaWifi className="mx-auto text-primary text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-primary">
              Internet vozilima
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Ako vam je potreban internet tokom voznje, nasa vozila imaju WI FI
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <FaPaw className="mx-auto text-primary text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-primary">
              Pet frendly
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Mi smo veliki ljubitelji zivotinja, naravno da su vasi kucni
              ljubimci dobrodosli
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kartice;
