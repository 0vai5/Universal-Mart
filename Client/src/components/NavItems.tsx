"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const NavItems = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About",
      href: "/about",
    },
  ];
  return (
    <>
      <ul className="w-full flex flex-col md:flex-row gap-10 justify-between items-start md:items-center mt-10 md:mt-0">
        {links.map(((link, index) => (
          <li  key={index}>
            <Link href={link.href}>
              <h4>{link.name}</h4>
            </Link>
          </li>
        )))}
        {/* <li className="bg-[#f5f5f5] flex items-center gap-1 px-2 rounded-sm">
          <Input
            type="text"
            placeholder="What are you looking for?"
            className="pl-1 border-none rounded-none shadow-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
          />
          <Search size={24} />
        </li> */}
      </ul>
    </>
  );
};

export default NavItems;
