import Fallback from "@/ui/FallBack";
import { Suspense } from "react";
import LatestCategories from "./_components/LatestCategories";
import { getCategories } from "@/services/categoryService";
import CategoriesHeader from "./_components/CategoriesHeader";

async function Categories() {
  const { categories } = await getCategories();
  return (
    <div>
      <CategoriesHeader />
      <Suspense fallback={<Fallback />}>
        <LatestCategories categories={categories} />
      </Suspense>
    </div>
  );
}

export default Categories;
