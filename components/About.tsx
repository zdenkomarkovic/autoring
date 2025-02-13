import React from "react";

const About = () => {
  return (
    <div className="container px-2 md:px-16 mx-auto py-10 md:py-20 space-y-5 md:space-y-10">
      <h2 className="text-3xl md:text-6xl px-8 font-bold text-primary text-center">
        U nasoj floti imamo veliki izbor novih vozila kojima vrsimo kombi prevoz
        i mini bus prevoz.
      </h2>
      <p className="text-xl md:text-3xl ">
        Naša firma sa sedištem u{" "}
        <span className="text-primary font-bold">Požegi</span> već{" "}
        <span className="text-primary font-bold"> preko 20 godina </span>
        pruža{" "}
        <span className="text-primary font-bold">
          siguran i udoban prevoz putnika
        </span>
        . Nudimo{" "}
        <span className="text-primary font-bold">
          {" "}
          mini bus prevoz, kombi prevoz, autobuski prevoz
        </span>{" "}
        i taxi prevoz za sve vrste putovanja – od lokalnih vožnji do
        međunarodnih tura.
      </p>
      <p className="text-xl md:text-3xl ">
        Pokrivamo Zlatibor, Užice, Arilje, Kosjerić, Lučane i okolinu, ali
        vršimo i prevoz putnika u inostranstvo. Bilo da vam treba prevoz za
        poslovna putovanja, ekskurzije, transfere do aerodroma ili turističke
        ture, kod nas ste u sigurnim rukama.
      </p>
    </div>
  );
};

export default About;
