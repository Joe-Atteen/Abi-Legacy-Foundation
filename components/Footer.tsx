import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#052453] text-white pt-20 pb-8">
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
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#030747] transition"
              aria-label={item.alt}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <p className="text-sm text-center pb-14">
          © Abi Legacy Foundation 2025. All rights reserved.
        </p>
      </div>
      <p className="text-sm text-center">
        Powered by{" "}
        <Link
          href="https://www.coreconnectghana.com/"
          className="text-[#439b24] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreConnect Limited
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
