"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-3">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={"/brands/A-lenovo.png"}
              alt="lenovo-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-intelaid.png"}
              alt="intelaid-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-genius.png"}
              alt="genius-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-dell.png"}
              alt="dell-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/B-razer.png"}
              alt="razer-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/M-hp.png"}
              alt="hp-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />

            {/* Second set of logos for animation */}
            <Image
              src={"/brands/A-lenovo.png"}
              alt="lenovo-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-intelaid.png"}
              alt="intelaid-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-genius.png"}
              alt="genius-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-dell.png"}
              alt="dell-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/B-razer.png"}
              alt="razer-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/M-hp.png"}
              alt="hp-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            /><Image
              src={"/brands/A-lenovo.png"}
              alt="lenovo-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-intelaid.png"}
              alt="intelaid-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-genius.png"}
              alt="genius-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/A-dell.png"}
              alt="dell-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/B-razer.png"}
              alt="razer-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
            <Image
              src={"/brands/M-hp.png"}
              alt="hp-logo"
              className="logo-ticker-image"
              width={200}
              height={100}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
