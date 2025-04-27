"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-political-navy"
          >
            <Image
              src="/foundation-logo.webp"
              width={190}
              height={0}
              alt="logo"
              className="hidden md:block"
            />
            <Image
              src="/foundation-logo.webp"
              width={130}
              height={0}
              alt="logo"
              className="md:hidden"
            />
          </Link>

          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="font-medium hover:text-[#0057a5]"
            >
              About
            </a>
            <a
              href="#issues"
              className="font-medium hover:text-[#0057a5]"
            >
              Activities
            </a>
            <a
              href="#get-involved"
              className="font-medium hover:text-[#0057a5]"
            >
              Join Us
            </a>
            <a
              href="#news"
              className="font-medium hover:text-[#0057a5]"
            >
              Contact Us
            </a>
          </div>

          <div className="hidden md:block">
            <Link href="/donate">
              <Button className="btn btn-primary">Donate</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-political-navy font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#issues"
                className="text-gray-700 hover:text-political-navy font-medium"
                onClick={toggleMenu}
              >
                Issues
              </a>
              <a
                href="#get-involved"
                className="text-gray-700 hover:text-political-navy font-medium"
                onClick={toggleMenu}
              >
                Join Us
              </a>
              <a
                href="#news"
                className="text-gray-700 hover:text-political-navy font-medium"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
              <Link href="/donate">
                <Button className="btn btn-primary">Donate</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
