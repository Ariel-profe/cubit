"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="py-10 overflow-x-clip bg-gradient-to-b from-primary to-background"
    >
      <div className="container mx-auto px-3">
        <div className="section-heading relative">
          <h2 className="section-title">Registrate gratis</h2>
          <p className="section-description mt-5">
            Empieza a disfrutar de todas las ventajas que
            ofrecemos. No te pierdas la oportunidad de acceder a contenido
            exclusivo y mucho más.
          </p>
          <motion.img
            src={"/assets/arrow.png"}
            alt="arrow-image"
            width={270}
            className="absolute -left-[350px] -top-[137px] rotate-[75deg]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={"/assets/chat.png"}
            alt="chat-image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Link href="/auth/new-account" className="text-slate-200 bg-secondary p-2 rounded md:hover:text-white md:hover:bg-secondary/80 transition-colors flex items-center gap-1">
            <span>Registrarme</span>
            <IoArrowForwardOutline className="h-5 w-5 group-hover:ml-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};
