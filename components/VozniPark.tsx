import { vw } from "@/constants/index";
import React from "react";
import ImageCarusel from "./Imagecarusel";

const VozniPark = () => {
  return (
    <div className="container px-2 md:px-5 mx-auto py-20 space-y-10">
      <h1 className="text-6xl text-center">Nas vozni park</h1>
      <ImageCarusel title={"volkswagen sa 22 sedista"} images={vw} />
    </div>
  );
};

export default VozniPark;
