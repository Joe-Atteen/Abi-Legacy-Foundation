"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";


const Page = () => {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });

  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true });

  const volunteerRef = useRef(null);
  const volunteerInView = useInView(volunteerRef, { once: true });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-10 md:flex-row justify-between items-center pt-[150px] md:pt-36 xl:pt-40 bg-gradient-to-r from-[#f1f8fe] to-transparent px-4 lg:pe-0 lg:ps-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:ms-auto w-[calc(100%-2rem)] lg:w-[calc(100%-1rem)] max-w-[900px]"
        >
          <h1 className="text-3xl md:text-4xl xl:text-7xl font-bold mb-4 leading-snug mx-auto text-[#0057a5] tracking-wide">
            PURPOSE
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl font-medium">
            I believe every individual deserves equal opportunities to thrive.
            I&apos;m committed to empowering girl children, widows, and orphans
            through education, economic empowerment, and social support.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src="/TJE-2.webp" width={700} height={0} alt="founder" />
        </motion.div>
      </motion.div>
      <motion.div
        ref={missionRef}
        initial={{ opacity: 0 }}
        animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 pt-10 md:pt-20"
      >
        {[
          {
            title: "Our Mission",
            text: "To empower girl children, widows, and orphans through education, economic empowerment, and social support, creating a brighter future for all.",
          },
          {
            title: "Our Vision",
            text: "A world where every individual, regardless of their background, has equal opportunities to thrive and achieve their full potential.",
          },
          {
            title: "What We Stand For",
            text: "Compassion, equality, and empowerment are at the heart of everything we do, driving positive change in our communities.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.7 * index }}
            className="bg-white p-6 rounded-3xl border border-[#f2f2f2] shadow-md"
          >
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        ref={videoRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          videoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-10 md:py-20 container mx-auto px-4"
      >
        <div className="max-w-[1000px] mx-auto rounded-3xl overflow-hidden border-2">
          <video
            controls
            className="w-full "
            src="https://res.cloudinary.com/dmosnkyn0/video/upload/v1746898152/about_kylmwt.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
      <motion.div
        ref={volunteerRef}
        initial={{ opacity: 0 }}
        animate={volunteerInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-[#f5f5f5]"
      >
        <div className="py-10 md:py-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              volunteerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1, delay: 1 }}
            className="max-w-[1300px] mx-auto overflow-hidden border-2 rounded-3xl shadow-lg flex flex-col lg:flex-row"
          >
            <Image
              src="/image-6.webp"
              width={700}
              height={0}
              alt="founder"
              className="object-cover w-full h-full"
            />
            <div className="p-6 lg:p-12 flex flex-col justify-center bg-white text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-[#0057a5]">
                Be A Volunteer & Help Us Make A Difference
              </h3>
              <p className="text-gray-700 mb-6 md:text-xl">
                Be a part of our mission to empower lives and create a brighter
                future. Together, we can make a difference.
              </p>
              <Link href="/volunteer">
                <Button className="btn btn-primary">Join Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Page;
