import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function CategoriesHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="w-1/2 flex gap-x-3 items-center">
        <h1 className="font-black text-secondary-700 text-xl">
          لیست دسته بندی ها
        </h1>
        <Link
          href="/profile/categories/create"
          className="btn btn--primary flex items-center gap-x-2  px-3"
        >
          <PlusIcon className="w-4 h-4" />
          <span>اضافه کردن دسته بندی</span>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesHeader;
