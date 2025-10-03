"use client";

import Link from "next/link";
import { GlowingCard, GlowingCards } from "@/components";
import { ICategory } from "@/interfaces";

interface Props {
  categories: ICategory[];
  isCategory?: boolean;
};

export const CategoriesGrid = ({ categories, isCategory = true }: Props) => {
  return (
    <GlowingCards
      enableGlow={true}
      glowRadius={30}
      glowOpacity={0.8}
      animationDuration={500}
      gap="1rem"
      childrenClassName="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2"
    >
      {
        categories.map((category) => (
          <GlowingCard glowColor={category.bgColor} className="" key={category.id}>
            <Link 
              href={isCategory ? `/productos/${category.href}` : `/marcas/${category.href}`}
              className="flex flex-col items-center justify-center pb-1 group relative transition-colors"
            >
              <img src={category.image} alt={category.title} className="h-full w-full object-cover grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              <div className="absolute bottom-0 right-0 group">
                {
                  isCategory && (
                    <h3 className="text-xl px-2 font-bold group-hover:text-secondary capitalize self-end">{category.title}</h3>
                  )
                }
              </div>
            </Link>
          </GlowingCard>
        ))
      }
    </GlowingCards>
  )
}
