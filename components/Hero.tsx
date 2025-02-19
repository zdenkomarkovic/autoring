"use client";

import Hero1 from "../public/hero1.jpg";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" hero relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />
      <div className="absolute top-0 left-0 w-full h-[100dvh] z-[0]">
        <Image
          src={Hero1}
          alt="Mini bus prevoz putnika"
          className="w-full h-[100dvh] object-cover"
        />
      </div>
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-white z-[1] text-center">
        <h1 className=" md:text-[4rem] text-3xl font-bold leading-[1.2] px-4">
          Mini bus i kombi prevoz putnika Požega
        </h1>
        <h2 className="text-background font-medium md:text-[1.5rem] text-md max-w-[800px] px-4">
          Pozovite nas i vozimo vas na željenu destinaciju.
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="tel:+381646103788">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary  px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
            >
              <FaPhoneAlt className="w-[18px]" />
              Pozovite Mini Bus
            </motion.button>
          </a>
          <a href="tel:+381656715715">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" flex items-center gap-2 bg-transparent border-background border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              <FaPhoneAlt className="w-[18px]" />
              Pozovite Taxi
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
