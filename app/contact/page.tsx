import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Message from "@/components/Message";
import Socials from "@/components/Socials";

const Page = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-[1200px] mx-auto py-10 md:py-20 px-4">
        <Image
          src="/contact-banner.webp"
          width={450}
          height={0}
          alt="logo"
          className="mx-auto mt-20 mb-12"
        />
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-10">
          <div>
            <div className="flex flex-col gap-8">
              <a
                href="mailto:abilegacyfoundation@gmail.com"
                className="flex items-center gap-4"
              >
                <div className="p-4 rounded-full border">
                  <FaEnvelope size={20} className="text-[#0057a5]" />
                </div>
                <span className="sm:text-lg font-medium">
                  abilegacyfoundation@gmail.com
                </span>
              </a>
              <a href="tel:0275918290" className="flex items-center gap-4">
                <div className="p-4 rounded-full border">
                  <FaPhone size={20} className="text-[#0057a5]" />
                </div>
                <span className="sm:text-lg font-medium">+233 55 876 4287</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full border">
                  <FaMapMarkerAlt size={20} className="text-[#0057a5]" />
                </div>
                <span className="sm:text-lg font-medium">
                  123 Main Street, City, Country
                </span>
              </div>
            </div>
            <Socials />
          </div>
          <div className="max-w-xl w-full border border-[#f2f2f2] shadow-lg rounded-lg p-3 sm:p-6">
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
