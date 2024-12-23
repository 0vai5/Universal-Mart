import React from "react";
import { CarousalData } from "@/constant";
import Carousal from "@/components/Carousal";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import BestSelling from "@/components/BestSelling";
import ExploreProducts from "@/components/ExploreProducts";
import CTA from "@/components/CTA";
import Services from "@/components/Services";

const page = () => {
  const heroData: CarousalData[] = [
    {
      id: 1,
      href: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
      alt: "Iphone Data",
    },
    {
      id: 2,
      href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBAp4v8odGO0qOmKvq2Kq2sjyS0E_BslG6w&s",
      alt: "macbook",
    },
  ];

  return (
    <>

      {/* TODO: Top Header will Be added Soon To enhance the look and feel of the App */}

      <section>
        <section className="px-0 md:px-10">
          <Carousal data={heroData} />
        </section>
        <section>
          <FeaturedProducts />
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <CTA />
        </section>
        <section>
          <BestSelling />
        </section>
        <section>
          <ExploreProducts /> 
        </section>
        <section>
          <Services />
        </section>
      </section>
    </>
  );
};

export default page;
