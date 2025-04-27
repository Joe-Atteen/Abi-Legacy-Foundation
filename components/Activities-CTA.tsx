"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Donate from "./Donate";

const Activities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className="flex justify-center items-center w-full activities-bg relative min-h-[80dvh]">
      <div className="relative z-1 my-container text-white px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center glass-card rounded-3xl py-12 px-4 lg:p-12 max-w-[800px] mx-auto"
        >
          <h2 className="capitalize text-2xl md:text-3xl lg:text-5xl font-bold md:leading-[60px] bold-text mb-5">
            You have a role to play
          </h2>
          <p className="mb-8 md:text-xl max-w-[600px] mx-auto">
            Together, we can build a world where the vulnerable are given the empowerment they
            deserve. Donate today.
          </p>
          <Donate />
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;
