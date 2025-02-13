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
import { ImageData, imageData } from "@/constants/index";
import Autoplay from "embla-carousel-autoplay";
import Image from "@/node_modules/next/image";

const ImageCarusel = ({
  title,
  images,
}: {
  title: string;
  images: string[];
}) => {
  return (
    <div className="pb-10 container px-4 mx-auto border-t-2 border-primary">
      <h2 className="text-5xl py-20 text-center text-primary font-gagalin">
        {title}
      </h2>

      <Carousel
        className="w-full overflow-hidden"
        opts={{
          loop: true,
          direction: "rtl",
          align: "start",
        }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="flex flex-row-reverse gap-1 md:ml-16 mr-8 md:mr-16 rtl">
          {images.map((image, i) => (
            <CarouselItem
              key={i}
              className="pl-1 basis-[88%] md:basis-1/2 lg:basis-1/3"
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
        className={`bg-primary relative overflow-hidden  rounded-3xl text-white `}
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
