"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Tag } from "@/components";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-3">
        <div className="section-heading">
          <div className="flex justify-center">
            <Tag title="Aumenta tu productividad" />
          </div>
          <h2 className="section-title mt-5">
            La forma más eficaz de mejorar tu rendimiento
          </h2>
          <p className="section-description mt-5">
            Convierte tus ideas en proyectos totalmente funcionales y 
            escalables. Con nuestra amplia gama de productos, podrás llevar tu
            negocio al siguiente nivel.
          </p>
        </div>
        <div className="relative">
          <Image 
            src={"/imgs/common/vr.jpg"} 
            alt="vr-image" 
            className="mt-10" 
            loading="lazy"
            width={1500}
            height={800}
          />
          <motion.img
            src={"/assets/mouse.png"}
            alt="mouse-image"
            height={300}
            width={300}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={"/assets/keyboard.png"}
            alt="keyboard-image"
            height={300}
            width={300}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
