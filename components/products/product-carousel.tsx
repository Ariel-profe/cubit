"use client";

import { useState } from "react";
import { motion } from "motion/react";

import useMeasure from "react-use-measure";
import { IProduct } from "@/interface";
import { ProductCard } from "./product-card";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

export const ProductCarousel = ({products}: {products: IProduct[]}) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (products.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="py-20 container mx-auto" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl underline underline-offset-4">Productos destacados</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-s4 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-s4 p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex mt-5"
          >
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} cardWidth={CARD_WIDTH} margin={MARGIN} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};