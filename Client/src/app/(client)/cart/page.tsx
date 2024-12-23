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
                <h2 className="text-gray-700 font-semibold">{product.title}</h2>
                <p className="text-gray-500">Rs. {Math.round(product.price)}</p>
              </div>
              <p className="text-gray-500">Rs. {Math.round(product.price)}</p>
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

        <div className="flex justify-between p-10 items-center md:flex-row flex-col">
          <div>
            <Button variant="outline" size="lg" className="rounded-sm">
              Continue Shopping
            </Button>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex justify-center gap-2">
            <Input type="text" placeholder="Coupon Code" />
            <Button variant="default" size="sm" className="rounded-sm">
              Apply
            </Button>
          </div>
          <div className="flex justify-between w-[30%] gap-4 flex-col p-4 border border-gray-300 rounded-md">
            <p className="font-semibold">Cart Total</p>
            <div className="flex justify-between items-center gap-4">
              <p>Subtotal:</p>
              <p>Rs. 1000</p>
            </div>
            <Separator />
            <div className="flex justify-between items-center gap-4">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <Separator />
            <div className="flex justify-between items-center gap-4">
              <p>Total:</p>
              <p>Rs. 1000</p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="rounded-sm bg-[#fd4444]"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
