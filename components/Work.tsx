"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  FaBroadcastTower,
  FaBook,
  FaSchool,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa"; 

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

const activities = [
  {
    bgClass: "activities1-bg",
    icon: <FaBroadcastTower size={40} className="mx-auto" />,
    text: "Media-based community sensitization",
  },
  {
    bgClass: "activities2-bg",
    icon: <FaBook size={40} className="mx-auto" />,
    text: "Community-based education",
  },
  {
    bgClass: "activities3-bg",
    icon: <FaSchool size={40} className="mx-auto" />,
    text: "Second cycle schools awareness",
  },
  {
    bgClass: "activities4-bg",
    icon: <FaUsers size={40} className="mx-auto" />,
    text: "Youth empowerment programs",
  },
  {
    bgClass: "activities5-bg",
    icon: <FaHeartbeat size={40} className="mx-auto" />,
    text: "Community-based health programs",
  },
];

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
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className={`flex justify-center items-center w-full ${activity.bgClass} relative h-full md:h-[600px] border border-white md:hover:w-[120%] transition-all duration-300 ease-in-out`}
            variants={item}
          >
            <div className="relative z-1 my-container text-white px-4 xl:px-10 py-10">
              <div className="text-center max-w-[800px] mx-auto flex flex-col items-center">
                <p className="xl:text-xl max-w-[600px] mx-auto uppercase tracking-widest">
                  {activity.text}
                </p>
                <div className="flex justify-center items-center w-[110px] h-[110px] border-white border-2 rounded-full mt-4">
                  <div className="flex justify-center items-center w-[100px] h-[100px] border-white border-2 rounded-full p-4">
                    {activity.icon}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={item}
        className="md:absolute md:bottom-[30px] md:left-1/2 md:transform md:-translate-x-1/2 text-center mt-5 pb-10 border-b md:border-b-0"
      >
        <Button className="btn btn-primary">View all</Button>
      </motion.div>
    </div>
  );
};

export default Work;
