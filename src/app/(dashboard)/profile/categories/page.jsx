import Fallback from "@/ui/FallBack";
import { Suspense } from "react";
import LatestCategories from "./_components/LatestCategories";
import { getCategories } from "@/services/categoryService";
import CategoriesHeader from "./_components/CategoriesHeader";

async function Categories() {
  const { categories } = await getCategories();

  if (categories.length === 0) {
    return (
      <>
        <CategoriesHeader />
        <p className="text-secondary-500">دسته بندی ایی وجود ندارد</p>
      </>
    );
  }

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
