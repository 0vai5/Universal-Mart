import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Separator } from "./ui/separator";

const BestSelling = async () => {
  const response = await fetch("http://localhost:8080/bestselling");
  const bestSelling = await response.json();
  return (
    <div className="max-container">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h1 className="head-text">Best Selling Products</h1>
        </div>
        <div>
          <Link href={"/products/bestSelling"}>
            <Button className="rounded-sm bg-[#db4444]">View All</Button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
        {bestSelling.map((product: any) => (
          <div className="rounded-md p-5" key={product.id}>
            <div className="relative text-center">
              <Link href={`/products/product/${product.id}`}>
                <Image
                  src={product.images[0]}
                  alt={product.alt}
                  className="hover:opacity-85 aspect-[3/4] object-cover w-full"
                  width={300}
                  height={300}
                />
              </Link>
              <div className="bg-gray-400 rounded-full p-1 absolute top-[-0px] right-0 m-4 md:m-2 cursor-pointer">
                <Heart className="text-white" size={20} />
              </div>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <div>
                <h2 className="text-gray-700">{product.title}</h2>
              </div>
              <div>
                <p className="text-gray-500">Rs. {Math.round(product.price)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Separator />
      </div>
    </div>
  );
};

export default BestSelling;
