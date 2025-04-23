"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import type { ICategory } from "@/interfaces";

interface Props {
  category: ICategory;
};

export const CategoryCard = ({ category }: Props) => {
  return (
    <SpotlightCard>
      <Link href={`/products/${category.href}`} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto group">
        <img src={category.image} alt={category.title} className="absolute inset-0 h-full w-full object-cover opacity-20 md:opacity-0 group-hover:opacity-30 transition-all" />
        <div className="absolute inset-0 bg-"></div>
        <h3 className="z-10 mt-3 text-xl font-bold text-white capitalize text-end">{category.title}</h3>
      </Link>
    </SpotlightCard>
  );
};
