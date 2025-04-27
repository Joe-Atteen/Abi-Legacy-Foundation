"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Work = () => {
  return (
    <div className="pt-10 md:pt-20 relative">
      <motion.div
        className="flex justify-center items-center mb-10 px-4 md:px-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item}>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4 leading-tight text-center max-w-[800px] mx-auto">
            See Our Impact
          </h3>
          <p className="text-gray-600 md:text-2xl text-center font-semibold max-w-[800px] mx-auto">
            Documenting Our Charity Work, Ensuring Transparency and
            Accountability
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex justify-center items-center w-full activities1-bg relative h-full md:h-[600px] border border-white md:hover:w-[120%] transition-all duration-300 ease-in-out"
          variants={item}
        >
          <div className="relative z-1 my-container text-white px-4 xl:px-10 py-10">
            <div className="text-center max-w-[800px] mx-auto">
              <p className="xl:text-xl max-w-[600px] mx-auto uppercase">
                Media-based community sensitization
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center w-full activities2-bg relative h-full md:h-[600px] border border-white md:hover:w-[120%] transition-all duration-300 ease-in-out"
          variants={item}
        >
          <div className="relative z-1 my-container text-white px-4 xl:px-10 py-10">
            <div className="text-center max-w-[800px] mx-auto">
              <p className="xl:text-xl max-w-[600px] mx-auto uppercase">
                Community-based education
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center w-full activities3-bg relative h-full md:h-[600px] border border-white md:hover:w-[120%] transition-all duration-300 ease-in-out"
          variants={item}
        >
          <div className="relative z-1 my-container text-white px-4 xl:px-10 py-10">
            <div className="text-center max-w-[800px] mx-auto">
              <p className="xl:text-xl max-w-[600px] mx-auto uppercase">
                Second cycle schools awareness
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center w-full activities4-bg relative h-full md:h-[600px] border border-white md:hover:w-[120%] transition-all duration-300 ease-in-out"
          variants={item}
        >
          <div className="relative z-1 my-container text-white px-4 xl:px-10 py-10">
            <div className="text-center max-w-[800px] mx-auto">
              <p className="xl:text-xl max-w-[600px] mx-auto uppercase">
                Youth empowerment programs
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center w-full activities5-bg relative h-full md:h-[600px] border border-white md:hover:w-[120%] transition-all duration-300 ease-in-out"
          variants={item}
        >
          <div className="relative z-1 my-container text-white px-4 xl:px-10 py-10">
            <div className="text-center max-w-[800px] mx-auto">
              <p className="xl:text-xl max-w-[600px] mx-auto uppercase">
                Community-based health programs
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div variants={item} className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2">
        <Button className="btn btn-primary">View all</Button>
      </motion.div>
    </div>
  );
};

export default Work;
