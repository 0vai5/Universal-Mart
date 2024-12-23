"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Heart, LogOut, User } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function UserDropdown() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const router = useRouter();



  // TODO: The Functions will be exported from utils and used here till now


  // const PushToAccount = () => {
  //   // TODO: the id will be comming from the user's account in redux state
  //   router.push("/account/id");
  // };
  // const Logout = () => {};
  // const Wishlist = () => {
  //   router.push("/wishlist");
  // };

  const buttons = [
    {
      navigation: "/account/id",
      label: "My Account",
      icon: <User size={24} />,
    },
    {
      navigation: "/",
      label: "Logout",
      icon: <LogOut size={20} />,
    },
    {
      navigation: "/wishlist",
      label: "Wishlist",
      icon: <Heart size={20} />,
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <User size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 glassmorphism">
        {buttons.map((button, index) => (
          <div
            onClick={() => router.push(button.navigation)}
            key={index}
            className="p-3 flex items-center gap-2 cursor-pointer"
          >
            {button.icon}
            <p className="text-sm">{button.label}</p>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
