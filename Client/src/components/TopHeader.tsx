"use client";

import React, { useState } from "react";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div
      className={`fixed gap-5 text-base w-full top-0 flex justify-center items-center p-1 text-white bg-black`}
    >
      <div className="flex md:flex-row md:justify-center items-center justify-start gap-0 md:gap-3 flex-wrap">
        <p className="">
          <span className="font-semibold">11.11</span> Explore Amazing Discounts on different categories
          from 1 - 20 November <Link href={"/products"} className="underline">Explore</Link>
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
