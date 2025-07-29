"use client";

import Link from "next/link";
import type { ICategory } from "@/interfaces";
import { GlowingEffect } from '../ui/glowing-effect';

interface Props {
  category: ICategory;
};

export const CategoryCard = ({ category }: Props) => {
  return (
    <Link href={`/productos/${category.href}`} className="flex flex-col items-center justify-center pb-1 group relative transition-colors">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <img src={category.image} alt={category.title} className="h-full w-full object-cover grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-70 transition-all" />
      <div className="absolute bottom-0 right-0 group">
        <h3 className="text-xl px-2 font-bold group-hover:text-secondary capitalize self-end backdrop-blur-sm">{category.title}</h3>
      </div>
    </Link>
  );
};
