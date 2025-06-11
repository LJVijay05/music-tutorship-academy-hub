
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryClick }: CategoryFilterProps) => (
  <div className="flex flex-wrap justify-center gap-4 animate-fade-up-slow" style={{ animationDelay: '400ms' }}>
    {categories.map((category, index) => (
      <Button
        key={category}
        variant={category === activeCategory ? "default" : "outline"}
        onClick={() => onCategoryClick(category)}
        className={`${
          category === activeCategory 
            ? "bg-red-600 hover:bg-red-700 text-white animate-professional-glow" 
            : "border-gray-300 hover:border-red-600 hover:text-red-600 hover:bg-red-50"
        } transition-all duration-300 rounded-full px-4 py-2 text-sm md:text-base hover:shadow-md hover:-translate-y-0.5`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {category}
      </Button>
    ))}
  </div>
);

export default CategoryFilter;
