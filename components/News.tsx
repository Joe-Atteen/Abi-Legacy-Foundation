"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const news = [
  {
    date: "7 MARCH 2023",
    author: "prambudi",
    title: "5 Ways to Get Involved in Your Local Charity Scene",
    description:
      "From volunteering your time to donating money, there are endless ways to make a positive impact in your community",
    image: "/image-9.webp",
  },
  {
    date: "7 MARCH 2023",
    author: "prambudi",
    title: "How Small Acts of Charity Can Make a Big Difference",
    description:
      "From volunteering your time to donating money, there are endless ways to make a positive impact in your community",
    image: "/image-11.webp",
  },
  {
    date: "7 MARCH 2023",
    author: "prambudi",
    title: "The Top 10 Charities Making a Difference in 2023",
    description:
      "From volunteering your time to donating money, there are endless ways to make a positive impact in your community",
    image: "/image-10.webp",
  },
];

const News = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <div className="px-4 py-10 md:py-16 max-w-7xl mx-auto">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4 leading-tight text-center max-w-[800px] mx-auto">
          News & Updates
        </h2>
        <p className="text-gray-600 md:text-lg text-center max-w-[700px] mx-auto">
          Stay informed about the latest developments in our charity work and
          how you can get involved.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
        {news.map((item, index) => (
          <AnimatedCard key={index} item={item} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

interface NewsItem {
  date: string;
  author: string;
  title: string;
  description: string;
  image: string;
}

const AnimatedCard = ({ item, delay }: { item: NewsItem; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className=""
    >
      <Image
        src={item.image}
        alt={item.title}
        width={500}
        height={300}
        className="w-full h-56 object-cover rounded-[24px]"
      />

      <div className="py-4">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-base text-gray-600 mb-4">{item.description}</p>
        <Link
          href="#"
          className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
        >
          Read More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default News;
