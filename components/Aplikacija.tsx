import Image from "next/image";
import React from "react";

const Aplikacija = () => {
  return (
    <div className="container mx-auto px-[8px] lg:px-[50px] text-gray-900">
      <div className=" pb-[20px] lg:pb-[50px] px-[8px] lg:px-[50px] border-2 border-cool-green rounded-3xl my-[50px] lg:my-[100px] bg-gray-100">
        <h2 className="text-[45px] lg:text-[80px] text-center py-[30px] lg:py-[80px] font-bold">
          <span className="text-primary">Mega Taksi Pozega </span> aplikacija
        </h2>
        <div className="flex flex-col-reverse gap-1 lg:flex-row justify-around items-center ">
          <div className=" flex flex-col lg:gap-3">
            <p className="text-[20px] lg:text-[24px]">
              - Preuzmite nasu aplikaciju i instalirajte na telefonu.
            </p>
            <p className="text-[20px] lg:text-[24px]">
              - Narucite voznju i pratite gde je vase vozilo i kojom brzinom
              dolazi.
            </p>
            <p className="text-[20px] lg:text-[24px]">
              - U aplikaciji vidite gde je vase vozilo i za koliko stize.
            </p>
            <p className="text-[20px] lg:text-[24px]">
              - Izadjite, tek kada vidite da je vozilo blizu
            </p>
          </div>
          <div>
            <div className=" relative z-20 text-center  pb-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.androcab.pub.megapozega&hl=sr"
                target={"_blank"}
                className="relative z-20"
              >
                <Image
                  src={"Google_Play.svg"}
                  width={250}
                  height={80}
                  alt="cool taxi aplikacija"
                  className="w-[250px] h-[80px] mx-auto lg:w-[300px] lg:h-[80px]"
                />
                <p className="lg:text-[20px] text-cool-green">
                  Preuzmite Mega Taxi Pozega android aplikaciju
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplikacija;
