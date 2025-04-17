"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const About = () => {
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 xl:gap-16 px-4 mb-10 md:mb-20"
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="overflow-hidden rounded-[32px] order-1 lg:order-2 flex flex-col justify-center"
      >
        <Image
          src="/image-6.webp"
          alt="discover"
          width={700}
          height={700}
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center order-2 lg:order-1"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
          About Us
        </h3>
        <p className="text-base lg:text-lg mb-5">
          Legacy Foundation is committed to bridging the gap for girl children,
          widows, and orphans, providing them with equal opportunities for
          growth and development.
        </p>
        <p className="text-base lg:text-lg">
          <span className="font-semibold mb-2">
            Our mission is built on the core values of:
          </span>
          <br /> <span className="font-semibold">1.</span> Equality: We believe
          every individual deserves equal access to resources and opportunities
          <br /> <span className="font-semibold">2.</span> Empowerment: We
          strive to equip vulnerable populations with the skills and confidence
          needed to succeed
          <br /> <span className="font-semibold">3.</span> Sustainability: We
          aim to create lasting impact through our initiatives and partnerships.
          By focusing on education, economic empowerment, and social support, we
          envision a future where girl children, widows, and orphans thrive and
          contribute positively to their communities.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
