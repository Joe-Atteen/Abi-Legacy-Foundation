import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#052453] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-6">
        <div>
          <Image
            src="/logo-alt.webp"
            alt="logo"
            width={150}
            height={100}
            className="mx-auto mb-5"
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {[
            { href: "#", icon: <FaFacebookF />, alt: "Facebook" },
            { href: "#", icon: <FaInstagram />, alt: "Instagram" },
            { href: "#", icon: <FaTiktok />, alt: "TikTok" },
            { href: "#", icon: <FaLinkedinIn />, alt: "LinkedIn" },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.alt}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#030747] transition"
              aria-label={item.alt}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          Abi Legacy Foundation 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
