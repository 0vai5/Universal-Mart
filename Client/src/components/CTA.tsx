import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"

const CTA = () => {

    // TODO: Image will be dynamically fetched from the API so it will have a dynamic redirection in button

  return (
    <div className="max-container bg-[#191919] w-full">
        <div className='p-0 flex justify-between items-center gap-3'>
            <div className="container1 flex flex-col gap-5">
                <div>
                    <h1 className="text-2xl text-[#5cc14e]">Categories</h1>
                </div>
                <div>
                    <h2 className=' text-white text-3xl font-normal'>Enhance Your HouseHold Experience</h2>
                </div>
                <div>
                    <p className='text-white text-lg'>
                        Discover a wide range of products to improve your home life. From kitchen gadgets to cleaning tools, we have everything you need.
                    </p>
                </div>
                <div>
                    <Button size={"lg"} className='rounded-sm bg-[#5cc14e] hover:bg-[#4aa43e]'>
                        Shop Now
                    </Button>
                </div>
            </div>
            <div className="container2">
                <Image
                src={"https://www.procart.pk/cdn/shop/files/rn-image_picker_lib_temp_d7abf46d-d8f7-40b4-bdda-298018c2bf18.webp?v=1701667709&width=360"}
                alt='cta-Image'
                width={360}
                height={360}
                />
            </div>
        </div>
    </div>
  )
}

export default CTA