import {
  bmercedes,
  bus,
  cmercedes,
  merced,
  mercedes,
  reno,
  vw,
} from "@/constants/index";
import React from "react";
import ImageCarusel from "./Imagecarusel";

const VozniPark = () => {
  return (
    <div className="container px-2 md:px-5 mx-auto py-20 space-y-10">
      <h1 className="text-6xl text-center text-primary font-bold">
        Nas vozni park
      </h1>
      <ImageCarusel title={"Volkswagen sa 22+1 sedista"} images={vw} />
      <ImageCarusel title={"Mercedes sa 23+1 sedista"} images={mercedes} />
      <ImageCarusel
        title={"Mercedes sa 7+1 sedista VIP za aerodromski transfer"}
        images={merced}
      />
      <ImageCarusel title={"Mercedes sa 21+1 sedista"} images={bmercedes} />
      <ImageCarusel
        title={"Mercedes sa 8+1 sedista VIP za aerodromski transfer"}
        images={cmercedes}
      />
      <ImageCarusel title={"14+1 sedista"} images={reno} />
      <ImageCarusel title={"Autobusi sa 59+2 sedista"} images={bus} />
    </div>
  );
};

export default VozniPark;
