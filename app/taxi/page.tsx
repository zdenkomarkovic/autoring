import Aplikacija from "@/components/Aplikacija";
import CallButton from "@/components/CallButtonTaxi";
import Hero from "@/components/Hero1";
import ImageEditor from "@/components/ImageEditor";
import Kartice from "@/components/Kartice";
import { taxi } from "@/constants/index";
import React from "react";

const Taxi = () => {
  return (
    <div className="taxi ">
      <Hero />
      <CallButton />
      <Kartice />
      <ImageEditor images={taxi} />
    </div>
  );
};

export default Taxi;
