"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Component() {
  return (
    <div className="h-[300px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]">
      <Carousel className="[&>*]:!rounded-none sm:[&>*]:!rounded-[28px]">
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-1.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-7.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-2.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-3.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full object-fit-cover"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-4.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-9.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-10.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/image-11.webp"
            width={800}
            height={800}
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
}


