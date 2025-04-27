"use client"
import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-10 md:py-20 text-white">
        <div className="text-center mb-10 md:mb-20">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-5xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            Our mission is built on the core values of:
          </motion.h3>
        </div>
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 max-w-5xl mx-auto mb-14">
          <motion.div
            className="text-center max-w-[450px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            <h4 className="text-xl md:text-3xl font-bold value relative inline">
              Equality
            </h4>
            <p className="text-base md:text-2xl mt-10">
              We believe every individual deserves equal access to resources and
              opportunities
            </p>
          </motion.div>
          <motion.div
            className="text-center max-w-[450px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            <h4 className="text-xl md:text-3xl font-bold value relative inline">
              Empowerment
            </h4>
            <p className="text-base md:text-2xl mt-10">
              We strive to equip vulnerable populations with the skills and
              confidence needed to succeed
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-20 max-w-6xl mx-auto">
          <motion.div
            className="text-center max-w-[450px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
          >
            <h4 className="text-xl md:text-3xl font-bold value relative inline">
              Sustainability
            </h4>
            <p className="text-base md:text-2xl mt-10">
              We aim to create lasting impact through our initiatives and
              partnerships. By focusing on education, economic empowerment, and
              social support, we envision a future where girl children, widows,
              and orphans thrive and contribute positively to their communities.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
