import About from "@/components/About";
import Hero from "@/components/Hero";
import SmallCards from "@/components/SmallCards";

import VozniPark from "@/components/VozniPark";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <SmallCards />
      <VozniPark />
    </div>
  );
}
