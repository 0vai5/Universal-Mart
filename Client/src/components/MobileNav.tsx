import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import {
  Menu
} from "lucide-react"
import Link from "next/link";
import Image from "next/image"
import { DialogTitle } from "@radix-ui/react-dialog"

const MobileNav = () => {
  return (
    <section className="lg:hidden md:block sm:block">
      <Sheet>
        <SheetTrigger asChild>
          <button className="h-5 flex items-start justify-start">
            <Menu className="font-lg dark:text-white text-dark " size={24} />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-white drop-shadow-[-100px 0px 30px -10px rgba(0,0,0,0.1)]">
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          <div>
            <Link href="/">
              <Image
                src={'/globe.svg'}
                alt="Company Logo"
                width={150}
                height={100}
                className="dark:hidden"
              />
            </Link>
          </div>
          <NavItems />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;