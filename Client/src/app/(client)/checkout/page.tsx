import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const page = () => {
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

      <div className="flex justify-around p-4 mt-3 md:flex-row flex-col">
        <div className="w-full md:w-1/2">
          <form>
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
          </form>
        </div>
        <div>Summary</div>
      </div>
    </div>
  );
};

export default page;
