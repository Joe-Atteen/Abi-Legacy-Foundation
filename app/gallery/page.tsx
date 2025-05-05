import React from "react";
import Image from "next/image";

const images = [
    "/image-1.webp",
    "/image-2.webp",
    "/image-3.webp",
    "/image-4.webp",
    "/image-5.webp",
    "/image-6.webp",
    "/image-7.webp",
    "/image-8.webp",
    "/image-9.webp",
    "/image-10.webp",
    "/image-11.webp",
    "/image-12.webp",
    "/image-13.webp",
    "/image-14.webp",
    "/image-15.webp",
];

const Page = () => {
  return (
    <div className="bg-white text-center px-4 pt-40 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug max-w-lg mx-auto">
        Building Brighter Futures, One Step at a Time
      </h1>
      <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 mb-20">
        Every smile, every hand reached, every story shared — this gallery
        reflects the heart of our mission. Together, we&apos;re creating lasting
        change and empowering lives through compassion, service, and hope.
      </p>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden shadow-sm break-inside-avoid"
          >
            <Image
              src={`${img}`}
              alt={`Gallery Image ${idx + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              priority={idx < 3} // Lazy load after first few
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
