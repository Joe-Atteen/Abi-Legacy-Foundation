import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mt-10">
      {[
        {
          href: "https://www.facebook.com/profile.php?id=100068861689001&mibextid=wwXIfr&mibextid=wwXIfr",
          icon: <FaFacebookF />,
          alt: "Facebook",
        },
        {
          href: "https://www.instagram.com/abilegacyfoundation?igsh=MXZmeWt3dXlibmJ4MA==",
          icon: <FaInstagram />,
          alt: "Instagram",
        },
        {
          href: "https://x.com/legacy_abi?t=oYEoTMfOxsmjSGNzIWeHMQ&s=08",
          icon: <FaXTwitter />,
          alt: "X",
        },
        {
          href: "https://www.linkedin.com/in/abi-legacy-foundation-08a982363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          icon: <FaLinkedinIn />,
          alt: "LinkedIn",
        },
        {
          href: "https://wa.me/233558764287",
          icon: <FaWhatsapp />,
          alt: "WhatsApp",
        },
      ].map((item) => (
        <Link
          href={item.href}
          key={item.alt}
          className="w-10 h-10 border border-[#0057a5] text-[#0057a5] rounded-full flex items-center justify-center hover:bg-[#0057a5] hover:text-white transition"
          aria-label={item.alt}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
