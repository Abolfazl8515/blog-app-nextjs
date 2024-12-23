import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FilterDropDown from "@/ui/FilterDropDown";

const options = [
  { value: "latest", label: "جدید ترین" },
  { value: "earliest", label: "قدیمی ترین" },
];

function PostsHeader() {
  return (
    <div className="flex items-center lg:justify-between mb-8 lg:flex-row gap-y-3 flex-col">
      <div className="lg:w-1/2 w-full flex gap-x-3 items-center justify-around">
        <h1 className="font-black text-secondary-700 text-xl">لیست پست ها</h1>
        <Link
          href="/profile/posts/create"
          className="btn btn--primary flex items-center gap-x-2  px-3"
        >
          <PlusIcon className="w-4 h-4" />
          <span>اضافه کردن پست</span>
        </Link>
      </div>
      <div className="lg:w-1/3 w-full">
        <FilterDropDown options={options} filterField="sort" />
      </div>
    </div>
  );
}

export default PostsHeader;
