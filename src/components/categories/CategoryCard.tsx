import { useState } from "react";
import type { ICategory } from "@/interfaces";
import { SpotlightCard } from "../shared/SpotlightCard";

interface Props {
  category: ICategory;
};

export const CategoryCard = ({ category }: Props) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpotlightCard>

      <a
        href={`/productos${category.href}`}
        className="grid place-items-center text-center px-2 aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {
          !isHovered ? (
            <h3 className="uppercase">
              {category.title}
            </h3>
          ) : (
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full rounded"
            />
          )
        }
      </a>
    </SpotlightCard>
  );
};
