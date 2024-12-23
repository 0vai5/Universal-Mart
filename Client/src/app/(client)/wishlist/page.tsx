import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Trash } from "lucide-react";

const page = async () => {
  const response = await fetch("http://localhost:8080/wishlist");
  const products = await response.json();
  return (
    <section className="max-container">
      <div className="flex justify-between items-center">
        <h1>Wishlist(4)</h1>
        <Button variant={"outline"} size={"lg"} className="rounded-sm">
          Add All to Bag
        </Button>
      </div>
      <div className="m-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {products.map((product: any) => (
          <div className=" rounded-md" key={product.id}>
            {product.images && product.images.length > 0 && (
              <>
                <div className="relative">
                  <Link href={`/products/product/${product.id}`}>
                    <Image
                      src={product.images[0]}
                      alt={product.alt}
                      className="hover:opacity-85 aspect-[full] w-full object-cover"
                      width={300}
                      height={300}
                    />
                  </Link>
                  <div className="bg-gray-400 rounded-full p-1 absolute top-[-0px] right-0 m-2 cursor-pointer">
                    <Trash className="text-white" size={20} />
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
    </section>
  );
};

export default page;
