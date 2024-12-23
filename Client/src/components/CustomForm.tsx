"use client";

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFields } from "@/constant";

const CustomForm = ({ type }: { type: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFields>();

  const onSubmit: SubmitHandler<LoginFields> = (data) => console.log(data);

  return (
    <div className="p-10">
      <div>
        <Image src={"/globe.svg"} width={50} height={50} alt="logo" />
      </div>
      <div className="mt-3">
        <h1 className="text-2xl font-semibold ">Log In to Universal Mart</h1>
        <p>Enter your Details Below</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {type === "register" && (
          <div className="mt-3">
            <Label>
              Name
              <Input
                placeholder="Name"
                type="text"
                {...register("name", { required: true })}
              />
            </Label>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
        )}
        <div className="mt-3">
          <Label>
            Email
            <Input
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
          </Label>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-3">
          <Label>
            Password
            <Input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must have at most 20 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "Password must contain at least one lowercase letter, one uppercase letter, and one number",
                },
              })}
            />
          </Label>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <Button type="submit" className="bg-[#db4444] w-full" size={"lg"}>
            {type === "login" ? "Log In" : "Register"}
          </Button>

          {/* TODO: 0Auth Login */}
        </div>

        <div className="mt-4 flex flex-col justify-between items-center">
          <Link
            href={`${type === "login" ? "/register" : "/login"}`}
            className="text-[#db4444] hover:text-black text-base"
          >
            {type === "login"
              ? "Don't have an Account"
              : "Already have an Account"}
          </Link>
          <Link
            href={"/forgetPassword"}
            className="text-[#db4444] hover:text-black transition-all text-base"
          >
            forget Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
