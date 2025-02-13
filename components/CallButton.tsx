"use client";
import { usePathname } from "@/node_modules/next/navigation";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  const [showCallButton, setShowCallButton] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    const taxiSection = document.querySelector(".taxi");
    const updateVisibility = (entries: IntersectionObserverEntry[]) => {
      const isHeroVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("hero") && entry.isIntersecting
      );

      const isTaxiVisible = entries.find(
        (entry) =>
          entry.target.classList.contains("taxi") && entry.isIntersecting
      );
      setShowCallButton(!isHeroVisible && !isTaxiVisible);
    };

    const observer = new IntersectionObserver(updateVisibility, {
      threshold: 0.1,
    });
    if (heroSection) observer.observe(heroSection);
    if (taxiSection) observer.observe(taxiSection);
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <div
      className={`
      ${
        showCallButton
          ? "opacity-100 translate-y-0 duration-500"
          : "opacity-0 translate-y-10 pointer-events-none duration-500"
      }
      fixed top-[250px] md:top-[65px] lg:top-[250px]  p-1 ml-2 lg:ml-10  z-50`}
    >
      <a
        href="tel:+381646103788"
        className={` bg-gray-700  px-[10px] py-[5px] opacity-90 rounded-lg flex items-center gap-[10px] text-[15px] lg:text-[17px] cursor-pointer`}
      >
        <FaPhoneAlt className="bg-gray-100 rounded-full w-6 h-6 lg:w-12 lg:h-12 p-[4px] text-primary" />{" "}
        <span className={` text-white flex flex-col text-center`}>
          Pozovite Mini Bus <span>+381646103788</span>{" "}
        </span>
      </a>
    </div>
  );
};

export default CallButton;
