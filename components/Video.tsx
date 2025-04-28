"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Video = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="h-full w-full relative overflow-hidden hero-bg">
      <div className="container mx-auto px-4 py-10 md:py-20 text-white">
        <div className="z-30 relative">
          <div className="text-center pt-40 pb-32">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-7xl font-bold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInVariants}
            >
              We are <br /> Abi Legacy Foundation
            </motion.h1>
            <motion.div
              className="text-center max-w-[900px] mx-auto mt-4 md:mt-8 mb-6 md:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInVariants}
            >
              <p className="text-lg md:text-2xl">
                Our singular vision is to empower vulnerable populations by
                providing them with the resources, opportunities, and support
                necessary to lead fulfilling
                lives.
              </p>
            </motion.div>
            <motion.div
              className="text-center max-w-[700px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInVariants}
            >
              <Button className="btn btn-primary">Join Us</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
