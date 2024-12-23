import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Categories = async () => {
  const response = await fetch("http://localhost:8080/categories");
  const categories = await response.json();
  return (
    <div className="max-container">
      <div>
        <h1 className="head-text">Browse By Categories</h1>
      </div>
      <div>
        <ScrollArea className="w-full ">
          <div className="flex w-max overflow-hidden space-x-4 p-4 ">
            {categories.map((category: any) => (
              <div className="rounded-md border-gray-500 border cursor-pointer" key={category.id}>
                <div className="px-10 py-5">
                  <Link href={`/product/category/${category.alt}`}>
                  <Image
                    src={category.image} // Updated path
                    alt={category.alt}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  </Link>
                </div>
                <div className="text-center">{category.name}</div>
              </div>
            ))}
          </div>
          <div>
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>
      <div>
        <Separator />
      </div>
    </div>
  );
};

export default Categories;
