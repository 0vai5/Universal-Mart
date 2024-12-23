"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CarousalData } from "@/constant";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

const Carousal = ({data} : {data : CarousalData[]}) => {
  return (
    <section className="max-container">
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
          {data.map(item => (
            <CarouselItem key={item.id}>
              <Image 
                src={item.href}
                alt={item.alt}
                width={1400}
                height={500}
                className="h-[50vh] w-[1400px] md:h-[70vh]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default Carousal;
