import { CategoryCard } from "@/components/products/category-card";
import { ICategory } from "@/interfaces";

interface Props {
    categories: ICategory[];
};

export const CategoriesGrid = ({categories}: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10 lg:mt-20">
        {
            categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))
        }
    </div>
  )
}
