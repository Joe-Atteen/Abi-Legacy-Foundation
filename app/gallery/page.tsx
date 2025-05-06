"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const images = [
  "/image-1.webp",
  "/image-2.webp",
  "/image-3.webp",
  "/image-7.webp",
  "/image-8.webp",
  "/image-9.webp",
  "/image-10.webp",
  "/image-12.webp",
  "/image-13.webp",
  "/image-14.webp",
  "/image-15.webp",
  "/image-16.webp",
  "/image-17.webp",
  "/image-18.webp",
  "/image-19.webp",
  "/image-20.webp",
  "/image-21.webp",
  "/image-22.webp",
  "/image-23.webp",
  "/image-24.webp",
  "/image-25.webp",
  "/image-26.webp",
  "/image-27.webp",
  "/image-28.webp",
  "/image-29.webp",
];

const Page = () => {
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  return (
    <div className="bg-white text-center px-4 pt-40 pb-20">
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-4 leading-snug max-w-lg mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Building Brighter Futures, One Step at a Time
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Every smile, every hand reached, every story shared — this gallery
        reflects the heart of our mission. Together, we&apos;re creating lasting
        change and empowering lives through compassion, service, and hope.
      </motion.p>

      {/* Animated Gallery */}
      <div
        ref={galleryRef}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 mx-auto"
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden shadow-sm break-inside-avoid"
            initial={{ opacity: 0, y: 50 }}
            animate={
              galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Image
              src={`${img}`}
              alt={`Gallery Image ${idx + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              priority={idx < 3} // Lazy load after first few
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
