import { getCategories } from "@/services/categoryService";
import Link from "next/link";
import { memo } from "react";

async function CategoryList() {
  const { categories } = await getCategories();
  return (
    <ul className="space-y-3">
      <li className="text-secondary-700">
        <Link href="/blogs" className="w-full h-full">
          همه
        </Link>
      </li>
      {categories.map((item) => (
        <li className="text-secondary-700" key={item._id}>
          <Link href={`/blogs/category/${item.slug}`} className="w-full h-full">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(CategoryList);
