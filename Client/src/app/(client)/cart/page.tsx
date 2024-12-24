import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const page = async () => {
  const response = await fetch("http://localhost:8080/products");
  const products = await response.json();
  const finalProducts = products.slice(0, 1);
  return (
    <div className="max-container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="flex justify-evenly items-start gap-5 md:gap-0 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            {finalProducts.map((product: any) => (
              <div className="flex justify-between gap-3 p-4  items-center border  border-gray-300">
                <div className="w-[150px] h-[150px]">
                  <Image
                    src={product.images[0]}
                    width={150}
                    height={150}
                    alt={product.alt}
                    className="hover:opacity-85 h-[150px] object-cover w-full"
                  />
                </div>
                <div className="flex justify-around flex-col flex-wrap">
                  <div className="flex justify-between items-center gap-3">
                    <h2 className="text-gray-700 font-semibold">
                      {product.title}
                    </h2>
                    <p className="text-gray-500">
                      Rs. {Math.round(product.price)}
                    </p>
                  </div>
                  <p className="text-gray-500">
                    Rs. {Math.round(product.price)}
                  </p>
                  <div className="flex gap-3 justify-between items-center border border-gray-300 px-2 py-1 rounded-md">
                    <div>{2}</div>
                    <div className="flex justify-center items-center flex-col">
                      <ChevronUp size={17} />
                      <ChevronDown size={17} />
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button variant="default" size="sm" className="rounded-sm">
                      <Trash size={20} />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 p-6 border border-gray-300 rounded-md shadow-sm">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Cart Summary
            </h2>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold text-gray-800">Rs. 1000</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center my-3">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold text-gray-800">Free</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center my-3">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-gray-800">Rs. 1000</span>
            </div>
            <Separator className="mb-4" />
            <Link href={"/checkout"}>
              <Button
                variant="default"
                size="lg"
                className="w-full rounded-md bg-[#fd4444] text-white hover:bg-red-500"
              >
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-between p-10 items-center md:flex-row flex-col">
          <div>
            <Button variant="outline" size="lg" className="rounded-sm">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
