"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "@/node_modules/next/image";

const ImageCarusel = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  return (
    <div className=" container px-2 md:px-8 mx-auto">
      <h3 className="text-xl md:text-4xl py-5 md:py-10 text-center font-bold">
        {title}
      </h3>

      <Carousel
        className="w-full overflow-hidden"
        opts={{
          loop: true,
          direction: "rtl",
          align: "center",
        }}
      >
        <CarouselContent
          className="flex flex-row-reverse gap-1 ml-1 md:ml-16  md:mr-16 rtl"
          style={{ transform: "none" }}
        >
          {images.map((image, i) => (
            <CarouselItem
              key={i}
              className="pl-1 basis-[83%] md:basis-[45%] lg:basis-[33%]"
            >
              <div className="px-1 flex flex-col">
                <ImageCard image={image}></ImageCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarusel;

const ImageCard = ({ image }: { image: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=""
    >
      <Card
        className={` bg-transparent relative overflow-hidden  rounded-3xl text-white `}
      >
        <Image
          src={image}
          width={200}
          height={200}
          alt="lucky fitnes"
          className=" w-full aspect-square object-cover"
        />
      </Card>
    </motion.div>
  );
};
