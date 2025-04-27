"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 xl:gap-16 px-4 py-10 md:py-20"
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="overflow-hidden rounded-[32px] flex flex-col justify-center max-h-[750px]"
      >
        <Image
          src="/image-5.webp"
          alt="discover"
          width={750}
          height={750}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center"
      >
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-primary">
          Meet Abigail Elorm Mensah
        </h3>
        <p className="text-base lg:text-lg mb-5">
          Hi, I am the founder of Legacy Foundation.
        </p>
        <p className="text-base lg:text-lg font-semibold mb-5">
          I&apos;m a dedicated social entrepreneur driven by a passion to
          empower vulnerable populations. With 5 years of experience in
          developing and implementing impactful initiatives, I&apos;m committed
          to creating positive change.
        </p>
        <span className="text-base lg:text-lg mb-5">
          <span className="font-semibold mb-5">Experience:</span>
          <br />
          <ul>
            <li>* Founder, Legacy Foundation</li>
            <li>
              * 5 years of experience in social entrepreneurship and community
              development
            </li>
          </ul>
        </span>
        <span className="text-base lg:text-lg mb-5">
          <span className="font-semibold mb-5">Skills:</span>
          <br />
          <ul>
            <li>* Strategic planning and program development</li>
            <li>* Community engagement and partnership building</li>
            <li>* Public speaking and advocacy</li>
          </ul>
        </span>
        <p className="text-base lg:text-lg">
          <span className="font-semibold mb-5">
            Why I Founded Legacy Foundation:
          </span>
          <br />I believe every individual deserves equal opportunities to
          thrive. I&apos;m committed to empowering girl children, widows, and
          orphans through education, economic empowerment, and social support.
        </p>
      </motion.div>
    </div>
  );
};

export default Founder;
