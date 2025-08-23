"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components";
import type { ICategory } from "@/interfaces";

interface Props {
  category: ICategory;
};

export const CategoryCard = ({ category }: Props) => {
  return (
    <SpotlightCard className="custom-spotlight-card" >
      <Link href={`/productos/${category.href}`} className="flex flex-col items-center justify-center pb-1 group relative transition-colors">
        <img src={category.image} alt={category.title} className="h-full w-full object-cover grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-70 transition-all" />
        <div className="absolute bottom-0 right-0 group">
          <h3 className="text-xl px-2 font-bold group-hover:text-tertiary capitalize self-end">{category.title}</h3>
        </div>
      </Link>
    </SpotlightCard>
  );
};
