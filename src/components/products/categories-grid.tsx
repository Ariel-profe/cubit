import { CategoryCard } from "@/components";
import { ICategory } from "@/interfaces";

interface Props {
  categories: ICategory[];
};

export const CategoriesGrid = ({ categories }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3 mt-10 fadeIn">
      {
        categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))
      }
    </div>
  )
}
