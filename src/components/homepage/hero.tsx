"use client";

import { useRef } from "react";
import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform
} from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Tag, RotatingText } from "@/components";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
    >
      <div className="container mx-auto px-3">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <Tag title="Insumos tecnológicos" />

            <div className="flex items-center gap-x-2 w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5">
              <h1 className="">Comprá lo que</h1>
              <RotatingText
                texts={['queres!', 'soñas!', 'deseas!', 'amas!']}
                mainClassName="px-2 bg-secondary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            
            <p className="md:text-xl text-slate-200 tracking-tight mt-6 text-justify max-w-xl">
              En CUBIT somos abanderados en la venta de productos tecnológicos de la ciudad de Mendoza. Tenemos los mejores precios del mercado y amplias facilidades de pagos.
            </p>
            <div className="flex gap-1 items-center gap-x-5 mt-[30px]">
              <Link href="/productos" className="text-slate-200 bg-secondary p-2 rounded md:hover:text-white md:hover:bg-secondary/80 transition-colors">Productos</Link>
              <Link href="/nosotros" className="flex items-center gap-1 group transition-all hover:underline underline-offset-4 hover:text-quaternary">
                <span>Conocenos</span>
                <IoArrowForwardOutline className="h-5 w-5 group-hover:ml-1 transition-all" />
              </Link>
            </div>
          </div>
          <div className="mt-0 lg:h-[648px] lg:flex-1 relative">
            <motion.img
              src={"/assets/speaker.png"}
              alt="speaker-image"
              className="lg:absolute lg:h-full lg:w-auto lg:max-w-none xl:-left-6 2xl:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={"/assets/joystick.png"}
              width={180}
              height={180}
              alt="joystick-image"
              className="hidden lg:block -top-8 -left-32 lg:absolute rotate-[-15deg]"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={"/assets/headset.png"}
              width={180}
              alt="mouse-image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[15deg]"
              style={{
                rotate: 0,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
