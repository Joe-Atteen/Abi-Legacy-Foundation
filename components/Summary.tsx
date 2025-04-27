"use client";

import { motion } from "framer-motion";

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

export default function HeroStatsSection() {
  return (
    <section className="py-10 md:py-20 px-4 md:px-10 max-w-6xl mx-auto">
      <motion.div
        className="flex justify-center items-center mb-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item}>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4 leading-tight text-center max-w-[800px] mx-auto">
            Empowering vulnerable populations to reach their full potential.
          </h1>
          <p className="text-gray-600 md:text-2xl font-semibold mb-6 text-center">
            We are dedicated to the empowerment of the girl child, widows and
            orphans. The focus is to give them an equal opportunity with others.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: "👥",
            value: "5,000+",
            label: "Individuals in the local community",
          },
          {
            icon: "🏅",
            value: "5+",
            label: "Years of experience",
          },
          {
            icon: "🟠",
            value: "600+",
            label: "Charity campaigns",
          },
          {
            icon: "💰",
            value: "20M",
            label: "Accrued Funding",
          },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="flex items-center gap-3"
            variants={item}
          >
            <div className="text-yellow-500 text-3xl">{stat.icon}</div>
            <div>
              <h3 className="text-xl font-bold">{stat.value}</h3>
              <p className="text-sm md:text-lg text-gray-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
