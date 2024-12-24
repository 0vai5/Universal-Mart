import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = async () => {
  const response = await fetch("http://localhost:8080/products");
  const products = await response.json();
  const finalProducts = products.slice(0, 2);
  return (
    <div className="max-container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-4">
        <h1 className="text-2xl font-semibold">Billing Details</h1>
      </div>
      <form>
        <div className="flex justify-around p-4 mt-3 gap-4 md:flex-row flex-col">
          <div className="w-full md:w-1/2">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="w-full mt-3">
                <Label>
                  Name
                  <Input type="text" placeholder="Name" />
                </Label>
              </div>
              <div className="w-full mt-3">
                <Label>
                  Street Address
                  <Input type="text" placeholder="Street" />
                </Label>
              </div>
              <div className="w-full mt-3">
                <Label>
                  Apartment, suite, unit etc. (optional)
                  <Input type="text" placeholder="Apt. No" />
                </Label>
              </div>
              <div className="w-full mt-3">
                <Label>
                  Town/City
                  <Input type="text" placeholder="City" />
                </Label>
              </div>
              <div className="w-full mt-3">
                <Label>
                  Phone Number
                  <Input type="number" placeholder="+92xxxxxxxxxx" />
                </Label>
              </div>
              <div className="w-full mt-3">
                <Label>
                  Email Address
                  <Input type="text" placeholder="example@example.com" />
                </Label>
              </div>
            </div>
            <div className="flex items-center mt-3 space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col justify-center gap-3">
              {finalProducts.map((product: any) => (
                <>
                  <div key={product.id} className="flex justify-between gap-14">
                    <Image
                      src={product.images[0]}
                      alt={product.alt}
                      width={50}
                      height={50}
                    />

                    <div>
                      <h2 className="text-gray-700 font-semibold">
                        {product.title}
                      </h2>
                      <p className="text-gray-500">
                        Rs. {Math.round(product.price)}
                      </p>
                    </div>
                  </div>
                  <Separator />
                </>
              ))}
            </div>
            <div className="py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-gray-800">Rs. 1000</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold text-gray-800">Free</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-lg font-bold text-gray-800">
                  Rs. 1000
                </span>
              </div>
              <Separator className="mb-4" />

              <RadioGroup defaultValue="option-one" className="p-2">
                <div className="flex justify-between items-center space-x-2">
                  <div className="flex justify-center items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Credit/Debit Card</Label>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Image
                      src={"/Mastercard.svg"}
                      alt="mastercard"
                      width={35}
                      height={35}
                    />
                    <Image
                      src={"/Visa.svg"}
                      alt="visa"
                      width={35}
                      height={35}
                    />
                    <Image
                      src={"/jazzcash-logo.png"}
                      alt="visa"
                      width={35}
                      height={35}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex justify-center items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Cash on Delivery</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div></div>
            <div></div>
            <Link href={"/checkout"}>
              <Button
                variant="default"
                size="lg"
                className="w-full rounded-md bg-[#fd4444] text-white hover:bg-red-500"
              >
                Place Order
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
