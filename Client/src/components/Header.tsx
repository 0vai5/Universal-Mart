import React from "react";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import UserDropdown from "./UserDropdown";
import {
  Camera,
  Gamepad,
  Headphones,
  Heart,
  ShoppingBag,
  Smartphone,
  Watch,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Header = () => {
  const user = false;
  return (
    <header className="header p-5">
      <div className="">
        <Image src={"/globe.svg"} height={50} width={50} alt="logo" />
      </div>
      <div className="hidden md:block">
        <NavItems />
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="md:hidden block">
          <MobileNav />
        </div>
        {user ? (
          <UserDropdown />
        ) : (
          <Link href={"/login"}>
            <Button>Log In</Button>
          </Link>
        )}
        <div className="relative">
          <Badge className="px-1 py-0 text-[12px] bg-[#db4444] left-[10px] top-[-9px] absolute">
            0
          </Badge>
          <Link href="/cart">
            <ShoppingBag size={24} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
