"use client"

import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 h-screen">
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">
            Insumos tecnológicos
          </div>
          <TextEffect per='char' preset='fade' as="h1" className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Comprá rápido y seguro
          </TextEffect>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10 text-white">
            En Cubit tenemos los mejores productos de Mendoza los cuales responderán a la necesidad de mejorar tu perfomance.
          </p>
          <Link href="/productos">
            <Button icon="/images/zap.svg">Productos</Button>
          </Link>
        </div>

        <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
          <img
            src="/images/hero.png"
            className="size-1230 max-lg:h-auto"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};