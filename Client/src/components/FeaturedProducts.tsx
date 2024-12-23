import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const FeaturedProducts = async () => {
  const response = await fetch("http://localhost:8080/featuredproducts");
  const products = await response.json();

  return (
    <div className="max-container">
      <div>
        <h1 className="head-text">Featured Products</h1>
      </div>
      <div>
        <ScrollArea className="w-full ">
          <div className="flex w-max overflow-hidden space-x-4 p-4 ">
            {products.map((product: any) => (
              <div className=" rounded-md" key={product.id}>
                {product.images && product.images.length > 0 && (
                  <>
                    <div className="relative">
                      <Link href={`/products/product/${product.id}`}>
                        <Image
                          src={product.images[0]}
                          alt={product.alt}
                          className="hover:opacity-85 aspect-[3/4] object-cover"
                          width={300}
                          height={300}
                        />
                      </Link>
                      <div className="bg-gray-400 rounded-full p-1 absolute top-[-0px] right-0 m-2 cursor-pointer">
                        <Heart className="text-white" size={20} />
                      </div>
                    </div>
                    <Link href={`/products/product/${product.id}`}></Link>
                    <div className="mt-2 flex justify-between items-center">
                      <div>
                        <h2 className="text-gray-700">{product.title}</h2>
                      </div>
                      <div>
                        <p className="text-gray-500">
                          Rs. {Math.round(product.price)}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div>
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>

      <div className="my-7 flex justify-center items-center px-3">
        <Link href={"/products/featuredProducts"}>
          <Button className="px-3 py-5 bg-[#db4444] rounded-sm">
            View All Products
          </Button>
        </Link>
      </div>

      <div>
        <Separator />
      </div>
    </div>
  );
};

export default FeaturedProducts;
